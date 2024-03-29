import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAajMuHTBYWTbvXV6t_4vTwHLj2Q3TSN2I",
  authDomain: "jobproject-649ea.firebaseapp.com",
  projectId: "jobproject-649ea",
  storageBucket: "jobproject-649ea.appspot.com",
  messagingSenderId: "542868314025",
  appId: "1:542868314025:web:1379f9540e3ed6f19416b8"
};


const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

export { db , app, auth };