import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdsLfj0rmqyPzdL3TRzxncSkd8oZtWF78",
  authDomain: "todo-app-f224e.firebaseapp.com",
  projectId: "todo-app-f224e",
  storageBucket: "todo-app-f224e.appspot.com",
  messagingSenderId: "89237116828",
  appId: "1:89237116828:web:694808a0798698c7e95a59",
  measurementId: "G-S9NCNSMCXX"
};


const app = initializeApp(firebaseConfig);
const db= getFirestore(app);
export {db};