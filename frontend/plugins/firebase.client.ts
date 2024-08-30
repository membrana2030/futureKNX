import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

import { onLCP, onFID, onCLS } from "web-vitals/attribution";

interface SubscribeData {
    [key: string]: any,
    email: string,
    name?: string
}

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const perf = getPerformance(app);

perf.dataCollectionEnabled = true;
perf.instrumentationEnabled = true;

function sendToGoogleAnalytics({ name, delta, value, id, attribution }: { [key: string]: any }) {
    const eventParams: { [key: string]: any } = {
        // Built-in params:
        value: delta, // Use `delta` so the value can be summed.
        // Custom params:
        metric_id: id, // Needed to aggregate events.
        metric_value: value, // Optional.
        metric_delta: delta, // Optional.
    }

    switch (name) {
        case 'CLS':
            eventParams.debug_target = attribution.largestShiftTarget;
            break;
        case 'FID':
            eventParams.debug_target = attribution.eventTarget;
            break;
        case 'LCP':
            eventParams.debug_target = attribution.element;
            break;
    }

    logEvent(analytics, name, eventParams);
}

onFID(sendToGoogleAnalytics); // First Input Delay
onLCP(sendToGoogleAnalytics); // Largest Contentful Paint
onCLS(sendToGoogleAnalytics); // Cumulative Layout Shift

export default defineNuxtPlugin((NuxtApp) => {
    NuxtApp.$firebase = app;
    NuxtApp.$db = db;
    NuxtApp.$analytics = analytics;
    NuxtApp.$perf = perf;
    NuxtApp.sendToGoogleAnalytics = sendToGoogleAnalytics;
})