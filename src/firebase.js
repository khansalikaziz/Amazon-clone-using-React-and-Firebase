import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCMW7wqxF5rWkH9FxWbUgrElB-yU35dEwg",
    authDomain: "final-deployment-of.firebaseapp.com",
    projectId: "final-deployment-of",
    storageBucket: "final-deployment-of.appspot.com",
    messagingSenderId: "1038564455232",
    appId: "1:1038564455232:web:6a7eade7474f03e57cc0a5",
    measurementId: "G-7HMHHFLP7J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };