import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore" 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNMGoVuoFFZY5K2gyj4kJXtebN36EivmM",
  authDomain: "fir-36cf6.firebaseapp.com",
  projectId: "fir-36cf6",
  storageBucket: "fir-36cf6.firebasestorage.app",
  messagingSenderId: "127442334879",
  appId: "1:127442334879:web:17bf6c0bfc594f3acb1eaa",
  measurementId: "G-6QT5J83M2H"
};

export default firebase.initializeApp(firebaseConfig)