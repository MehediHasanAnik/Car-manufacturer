// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGH5V7zKuZwXp28pbT-7ysHRS9POVgZig",
    authDomain: "twelve-assignment.firebaseapp.com",
    projectId: "twelve-assignment",
    storageBucket: "twelve-assignment.appspot.com",
    messagingSenderId: "945467954228",
    appId: "1:945467954228:web:0f0500b1f98a4ede1b6661"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;