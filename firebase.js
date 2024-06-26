
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwBzChM1T1e2AUnKdnLckIQrkAgfNtxb0",
  authDomain: "react-notes-287c9.firebaseapp.com",
  projectId: "react-notes-287c9",
  storageBucket: "react-notes-287c9.appspot.com",
  messagingSenderId: "157348686987",
  appId: "1:157348686987:web:b122d8b858c8c0b523788e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")