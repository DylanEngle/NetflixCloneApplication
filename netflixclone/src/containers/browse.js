import React, {useState, useContext, useEffect} from 'react';
import { SelectProfileContainer } from './profiles';
import { FirebaseContext } from '../context/firebase';
import {getAuth} from 'firebase/auth';
import {Loading} from '../components';

export function BrowseContainer({slides}){
    const {firebase} = useContext(FirebaseContext);
    const auth = getAuth(firebase);

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);



    const user = auth.currentUser || {};

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [profile.displayName]);

    return profile.displayName ? (loading ? <Loading src={user.photoURL}/> : null) :

    <SelectProfileContainer user={user} setProfile={setProfile}></SelectProfileContainer>
    
}