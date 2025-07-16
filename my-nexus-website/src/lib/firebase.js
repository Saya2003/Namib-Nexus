// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8QHn2JY9hcyorMAGJRVAXI0gijTiqElo",
  authDomain: "namib-nexus-34bce.firebaseapp.com",
  projectId: "namib-nexus-34bce",
  storageBucket: "namib-nexus-34bce.firebasestorage.app",
  messagingSenderId: "774548040114",
  appId: "1:774548040114:web:dd38bf6369e7a8da25dcab",
  measurementId: "G-P8DMC05MLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;