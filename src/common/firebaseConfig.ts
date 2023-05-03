// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp6fkZvXW4D3Vn8W-y_75-qJ99nJTIEBs",
  authDomain: "seoul-1a489.firebaseapp.com",
  projectId: "seoul-1a489",
  storageBucket: "seoul-1a489.appspot.com",
  messagingSenderId: "763097952667",
  appId: "1:763097952667:web:68878d25e2f7eab620313e",
  measurementId: "G-5TNWYRN68Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
export { db };
