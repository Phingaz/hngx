import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYmvcEIA-kwgDV5uNj3qTmJlMVLNkC0AQ",
  authDomain: "hngxfour.firebaseapp.com",
  projectId: "hngxfour",
  storageBucket: "hngxfour.appspot.com",
  messagingSenderId: "518504873973",
  appId: "1:518504873973:web:f55b344d205728ca39aabc",
  measurementId: "G-Y11T0FR8RG",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
