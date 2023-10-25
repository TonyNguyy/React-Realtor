// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCePRseS_ANSnjq3bXkQxIZWla2TF0jdMI",
  authDomain: "realtor-clone-react-a4c82.firebaseapp.com",
  projectId: "realtor-clone-react-a4c82",
  storageBucket: "realtor-clone-react-a4c82.appspot.com",
  messagingSenderId: "1031210021297",
  appId: "1:1031210021297:web:51990ed077194839a70d90"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();