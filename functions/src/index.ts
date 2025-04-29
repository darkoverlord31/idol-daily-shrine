/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

import * as functions from "firebase-functions";
import admin from "firebase-admin";
import { fetchPinterestPins } from "./yourPinterestHelper"; // you’ll write this

admin.initializeApp();

// Runs every day at 6am
export const dailyFetch = functions.pubsub
  .schedule("0 6 * * *")
  .timeZone("Africa/Gaborone")
  .onRun(async () => {
    const pins = await fetchPinterestPins();
    const db = admin.firestore();
    // Save pins to Firestore...
    return Promise.resolve();
  });

