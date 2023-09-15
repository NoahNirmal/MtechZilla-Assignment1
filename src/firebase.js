// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth,GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDupEKY4KhwgtQvWYEhJxPtT8aZoPYwF2c",
  authDomain: "mtechzilla-auth.firebaseapp.com",
  projectId: "mtechzilla-auth",
  storageBucket: "mtechzilla-auth.appspot.com",
  messagingSenderId: "385204637212",
  appId: "1:385204637212:web:d9c1f73d2f8b4ab2c3d9d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
