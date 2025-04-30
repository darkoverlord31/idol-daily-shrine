import { onSchedule } from "firebase-functions/v2/scheduler";
import * as admin from "firebase-admin";
import { fetchPinterestPins } from "./pinterestHelper";

admin.initializeApp();

export const dailyFetch = onSchedule(
  "0 6 * * *",   // runs at 6 UTC every day
  async () => {
    try {
      const pins = await fetchPinterestPins();
      const db = admin.firestore();
      const batch = db.batch();
      pins.forEach((pin) => {
        batch.set(db.collection("pins").doc(pin.id), {
          id: pin.id,
          url: pin.images?.["236x"]?.url ?? "",
          title: pin.title ?? "",
          created_at: pin.created_at,
        });
      });
      await batch.commit();
      console.log(`✅ Saved ${pins.length} pins`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("❌ dailyFetch failed:", err);
    }
    // **no** explicit return here → returns Promise<void>
  }
);
