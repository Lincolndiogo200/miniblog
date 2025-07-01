import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkxQORt2a8dcwAr_3eb5KfonLMrhRK5Kc",
  authDomain: "miniblog-dd152.firebaseapp.com",
  projectId: "miniblog-dd152",
  storageBucket: "miniblog-dd152.firebasestorage.app",
  messagingSenderId: "247286152574",
  appId: "1:247286152574:web:59d8efcfe2861aa9ec072f",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
