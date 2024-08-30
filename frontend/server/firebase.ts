import { initializeApp, cert, App } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import serviceAccount from "./firebase.future-knx-firebase-adminsdk-iigf3-73dc583855.json";

const credential = cert(serviceAccount as object)
export const app: App = initializeApp({ credential }, "futureknx");
export const db = getFirestore(app);
