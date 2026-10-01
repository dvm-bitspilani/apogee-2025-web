import { useSyncExternalStore } from "react";

const subscribers = new Set();
function notify() { subscribers.forEach(subscriber => subscriber()); }
function subscribe(subscriber) {
  subscribers.add(subscriber);
  if (subscribers.size === 1) document.addEventListener("visibilitychange", notify);
  return () => {
    subscribers.delete(subscriber);
    if (!subscribers.size) document.removeEventListener("visibilitychange", notify);
  };
}
export default function useDocumentVisible() {
  return useSyncExternalStore(subscribe, () => !document.hidden, () => true);
}
