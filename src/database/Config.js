// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJA2d27JV1Y7XVMqCagBlViPCRQDN-Yz8",
  authDomain: "blogapp-f8e30.firebaseapp.com",
  projectId: "blogapp-f8e30",
  storageBucket: "blogapp-f8e30.firebasestorage.app",
  messagingSenderId: "427711826313",
  appId: "1:427711826313:web:cc600a8c8bfca8629a3958",
  measurementId: "G-YZ6B6MBBPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;