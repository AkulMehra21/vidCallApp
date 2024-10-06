// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMglYGky5yJTgoxHUY3fYPjGbjG6xsTmg",
  authDomain: "fifa-web-app.firebaseapp.com",
  projectId: "fifa-web-app",
  storageBucket: "fifa-web-app.appspot.com",
  messagingSenderId: "43253209561",
  appId: "1:43253209561:web:60c7ec72d62b07ab7921c8",
  measurementId: "G-GZ3X2X2K1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);  
const auth = getAuth();
auth.useDeviceLanguage()

export default auth;