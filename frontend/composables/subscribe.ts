import { logEvent } from "firebase/analytics";
import { addDoc, collection } from "firebase/firestore";

export function subscribe(data: SubscribeData) {
    return new Promise<any>((resolve, reject) => {
        const nuxt = useNuxtApp();
        const _subscription = collection(nuxt.$db, "/subscription");
        addDoc(_subscription, data)
            .then((result) => {
                logEvent(nuxt.$analytics, "subscription", { name: "newsletter" });
                resolve(result);
            })
            .catch(reject);
    });
}