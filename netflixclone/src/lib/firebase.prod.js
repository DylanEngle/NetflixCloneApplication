import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDUkSV-pjrlzU02OyJeqTBE0FksFEOq6TM",
  authDomain: "netflix-clone-d387b.firebaseapp.com",
  projectId: "netflix-clone-d387b",
  storageBucket: "netflix-clone-d387b.appspot.com",
  messagingSenderId: "357028326418",
  appId: "1:357028326418:web:8a0aad4c4d61f54c5cfccb"
};

const firebase = initializeApp(config);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebase);

// Initialize Firestore and get a reference to the service
//const db = getFirestore(firebase);

export { firebase };