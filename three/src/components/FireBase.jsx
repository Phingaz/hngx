import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_KEY_apiKey,
  authDomain: import.meta.env.VITE_KEY_authDomain,
  projectId: import.meta.env.VITE_KEY_projectId,
  storageBucket: import.meta.env.VITE_KEY_storageBucket,
  messagingSenderId: import.meta.env.VITE_KEY_messagingSenderId,
  appId: import.meta.env.VITE_KEY_appId,
  measurementId: import.meta.env.VITE_KEY_measurementId,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, auth, storage, ref };
