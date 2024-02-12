// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
import {getFirestore, collection} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyAVhQ-FKyUoJManWjYzKD3i6ma4esy2nIM",
  authDomain: "authfirebase01.firebaseapp.com",
  projectId: "authfirebase01",
  storageBucket: "authfirebase01.appspot.com",
  messagingSenderId: "578717810437",
  appId: "1:578717810437:web:f182d87e319de7e412816c"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);


export const tripsRef = collection(db, 'trips');
export const expensesRef = collection(db, 'expenses');

export default app;