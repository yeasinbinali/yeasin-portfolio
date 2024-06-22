// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-_v1fUQtEoW3jZL7581iaBI6HRuNNXYo",
    authDomain: "yeasin-portfolio-dev.firebaseapp.com",
    projectId: "yeasin-portfolio-dev",
    storageBucket: "yeasin-portfolio-dev.appspot.com",
    messagingSenderId: "920698429678",
    appId: "1:920698429678:web:8e8f90492feb85358713ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;