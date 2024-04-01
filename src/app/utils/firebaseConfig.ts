import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTAa43Gf3mysZFmeewkD6qUgIcEkDiUpk",
  authDomain: "kanban-app-418808.firebaseapp.com",
  projectId: "kanban-app-418808",
  storageBucket: "kanban-app-418808.appspot.com",
  messagingSenderId: "86994312532",
  appId: "1:86994312532:web:701deb2c6afae4495d7cc1",
  measurementId: "G-PGB7NBPVX4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore and export it
export const db = getFirestore(app);
