import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdgNQ8POXlhYsc_hUfoFSUR6kFanCAwPM",
  authDomain: "react-event-app-161a1.firebaseapp.com",
  projectId: "react-event-app-161a1",
  storageBucket: "react-event-app-161a1.appspot.com",
  messagingSenderId: "344251263367",
  appId: "1:344251263367:web:f001d2c9352d4806cc8b22",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
