import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8p5Y1l9hwd7cBRhNqZADzjV3lKDGcojQ",
  authDomain: "react-app-cursos-e427a.firebaseapp.com",
  databaseURL: "https://react-app-cursos-e427a.firebaseio.com",
  projectId: "react-app-cursos-e427a",
  storageBucket: "react-app-cursos-e427a.appspot.com",
  messagingSenderId: "565317690180",
  appId: "1:565317690180:web:2c166c9362d5f228742d11"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}