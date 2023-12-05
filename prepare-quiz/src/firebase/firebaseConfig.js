// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_M0mFtIUKMxg1o3QMIa-TAp8vBBXUmLk",
  authDomain: "quizapp-e98e2.firebaseapp.com",
  projectId: "quizapp-e98e2",
  storageBucket: "quizapp-e98e2.appspot.com",
  messagingSenderId: "368922850353",
  appId: "1:368922850353:web:c62a1536c48fd7f4f61110",
  measurementId: "G-WWHCS5E8BG"
};

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const firestore = firebase.firestore();
const date = firebase.firestore.FieldValue.serverTimestamp;

export { firestore, date }