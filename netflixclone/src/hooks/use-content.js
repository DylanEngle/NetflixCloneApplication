import { useEffect, useState} from 'react';
import {db} from '../lib/firebase.prod';
import { collection, getDocs} from 'firebase/firestore';

function useContent(target) {
    const [content, setContent] = useState([]);

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const snapshot = await getDocs(collection(db, target));
                const allContent = snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    docId: doc.id,
                }));

                setContent(allContent);
            } catch (error) {
                console.error('Error fetching content:', error.message);
            }
        };

        fetchContent();

        // Cleanup function to reset the content state if needed
        return () => setContent([]);

    }, [target]);

    return { [target]: content };
}

export default useContent;
