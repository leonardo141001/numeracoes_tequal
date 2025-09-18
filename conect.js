
// conect.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAsBjZzy3dACyKvGKbOOb3vx3w88ilMfm0",
  authDomain: "hvac-numeracao.firebaseapp.com",
  projectId: "hvac-numeracao",
  storageBucket: "hvac-numeracao.firebasestorage.app",
  messagingSenderId: "906684531280",
  appId: "1:906684531280:web:bcff53a3d96159ebd9c755",
  measurementId: "G-G7GE9KSQVR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

console.log("Conectado"); // vi no seu log :)

export { db, auth };