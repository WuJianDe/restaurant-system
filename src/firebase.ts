
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
const firebaseConfig = {
  apiKey: "AIzaSyAqz3WK0UEoBPB8Lh_cOuMFwjbR3IAeF3o",
  authDomain: "foodcreator-8becd.firebaseapp.com",
  projectId: "foodcreator-8becd",
  storageBucket: "foodcreator-8becd.firebasestorage.app",
  messagingSenderId: "884431552679",
  appId: "1:884431552679:web:388769a5d5ed070bbfdb82",
  measurementId: "G-5PHWLHLCEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);