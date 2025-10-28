// app.js — Firebase setup (use this exact file in project root)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCoOop3v35luXJoHRqwOXZa45RrStn5Efc",
  authDomain: "novel-mint-backend.firebaseapp.com",
  projectId: "novel-mint-backend",
  storageBucket: "novel-mint-backend.appspot.com",
  messagingSenderId: "747416436909",
  appId: "1:747416436909:web:0e75f89d55f31b27c38624",
  measurementId: "G-45R6646BWV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
