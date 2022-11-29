
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import {
    getFirestore,
    collection,
    addDoc
  } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBnn-V_-a47yGLsbUoiYcBoAEY9vLxzxlg",
    authDomain: "calendarioeldorado.firebaseapp.com",
    projectId: "calendarioeldorado",
    storageBucket: "calendarioeldorado.appspot.com",
    messagingSenderId: "347551215718",
    appId: "1:347551215718:web:770b0d1796d37213de7da7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore()

  export const saveEvent = (titulo, descripcion) =>
  addDoc(collection(db, "tasks"), { titulo, descripcion});