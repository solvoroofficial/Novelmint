// app.js — Firebase main setup

// Import Firebase modules (CDN or local import depending on your setup)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-storage.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoOop3v35luXJoHRqwOXZa45RrStn5Efc",
  authDomain: "novel-mint-backend.firebaseapp.com",
  projectId: "novel-mint-backend",
  storageBucket: "novel-mint-backend.firebasestorage.app",
  messagingSenderId: "747416436909",
  appId: "1:747416436909:web:0e75f89d55f31b27c38624",
  measurementId: "G-45R6646BWV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export to use in other files
export { app, auth, db, storage };
