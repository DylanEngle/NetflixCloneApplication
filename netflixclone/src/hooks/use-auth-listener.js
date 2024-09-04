import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function useAuthListener() {
  const [user, setUser] = useState(null);
  const { firebase } = useContext(FirebaseContext); // Assuming firebase is initialized and provided

  useEffect(() => {
    const auth = getAuth(firebase); // Initialize auth using modular syntax

    // Retrieve the user from localStorage once, after initial render
    const storedUser = JSON.parse(localStorage.getItem('authUser'));
    if (storedUser) {
      setUser(storedUser);
    }

    // Set up the Firebase auth listener
    const listener = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    // Clean up the listener on component unmount
    return () => listener();
  }, [firebase]); // Add firebase as a dependency

  return { user };
}
