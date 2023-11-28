// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgFNa7qWAnFbATfVuPq5TApnWizkTDAns",
  authDomain: "social-media-web-99dd9.firebaseapp.com",
  projectId: "social-media-web-99dd9",
  storageBucket: "social-media-web-99dd9.appspot.com",
  messagingSenderId: "59419779345",
  appId: "1:59419779345:web:f662477d24c4f487d42cb0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);