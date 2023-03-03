// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFXanlCzz-CmaPTeDnWhg48xBOP8GKaGw",
  authDomain: "react-coder-2023.firebaseapp.com",
  projectId: "react-coder-2023",
  storageBucket: "react-coder-2023.appspot.com",
  messagingSenderId: "425020682023",
  appId: "1:425020682023:web:80cb7c6c569eb5303f0302"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)