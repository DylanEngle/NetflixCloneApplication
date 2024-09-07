import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const config = {
    apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const firebase = initializeApp(config);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebase);

// Initialize Firestore and get a reference to the service
const db = getFirestore(firebase);

export { firebase, db, auth };