import fetch from 'node-fetch';
import * as functions from 'firebase-functions';

const TOKEN = functions.config().pinterest.token;
const BOARD = functions.config().pinterest.boardid;

export async function fetchPinterestPins() {
  const res = await fetch(`https://api.pinterest.com/v5/boards/${BOARD}/pins`, {
    headers: { Authorization: `Bearer ${TOKEN}` },
  });
  if (!res.ok) throw new Error(`Pinterest API ${res.status}: ${await res.text()}`);
  const data = await res.json();
  return data.items;
}
