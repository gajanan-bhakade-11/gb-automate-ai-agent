import { existsSync, readFileSync } from "node:fs";
import { cert, initializeApp } from "firebase-admin";

const serviceAccountPath = new URL("../serviceAccountKey.json", import.meta.url);
const serviceAccountJson =
  process.env.FIREBASE_SERVICE_ACCOUNT_JSON ||
  (existsSync(serviceAccountPath)
    ? readFileSync(serviceAccountPath, "utf8").trim()
    : "");
const serviceAccount = serviceAccountJson
  ? JSON.parse(serviceAccountJson)
  : null;

if (serviceAccountJson) {
  if (!serviceAccount.project_id || !serviceAccount.private_key) {
    throw new Error("Firebase Admin service-account JSON is missing required fields.");
  }
}

export const app = serviceAccount
  ? initializeApp({ credential: cert(serviceAccount) })
  : initializeApp();

if (!serviceAccountJson) {
  console.warn("Firebase Admin credentials unavailable; configure FIREBASE_SERVICE_ACCOUNT_JSON.");
}