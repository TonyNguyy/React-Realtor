// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkvtF7neffNt0FiGl2r-PP7S-KxthFbaE",
  authDomain: "react-budgetapp.firebaseapp.com",
  projectId: "react-budgetapp",
  storageBucket: "react-budgetapp.appspot.com",
  messagingSenderId: "985939881711",
  appId: "1:985939881711:web:e18873d3f08e07c63fb51a",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();