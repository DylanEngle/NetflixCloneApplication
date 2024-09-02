import React, {useState, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {FirebaseContext} from '../context/firebase';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import {Form} from '../components';
import { createUserWithEmailAndPassword, getAuth, updateProfile} from 'firebase/auth';
import * as ROUTES from '../constants/routes';

function Signup(){
    const navigate = useNavigate();
    const {firebase} = useContext(FirebaseContext);
    const auth = getAuth(firebase);
    const[firstName, setFirstName] = useState('');

    const [emailAddress, setEmailAddress] = useState();
    const [isValidEmail, setIsValidEmail] = useState(false);

    const [password, setPassword] = useState();
    const [isValidPassword, setIsValidPassword] = useState(false);

    const [error, setError] = useState('');

    // check form input elements are valid
    const isInvalid = (firstName === '' || password === '' || emailAddress === '') || (!isValidEmail || !isValidPassword);

    const handleEmailChange = (event) => {
        const newEmail = event.target.value;
        setEmailAddress(newEmail);
    
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setIsValidEmail(emailRegex.test(newEmail));
      };
    
    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);

        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        setIsValidPassword(passwordRegex.test(newPassword));
    };

    const handleSignUp = (event) => {
        event.preventDefault();
        
            createUserWithEmailAndPassword(auth, emailAddress, password)
            .then((result) => {
                
                updateProfile(result.user, {
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 5) + 1
                 }).then(() => {
                    navigate(ROUTES.BROWSE);
                 })
                
            })
            .catch((error) => {
                setFirstName('');
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            })
    }


    return(
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignUp} method="POST">
                        <Form.Input placeholder='First name' value={firstName} onChange={({target}) => setFirstName(target.value)}></Form.Input>
                        <Form.Input placeholder='Email address' value={emailAddress} onChange={handleEmailChange}></Form.Input>
                        <Form.Input type='password' autoComplete="off" placeholder='Password' value={password} onChange={handlePasswordChange}></Form.Input>
                        <Form.Submit disabled={isInvalid} type='submit'>Sign Up</Form.Submit>
                    </Form.Base>
                    <Form.Text>
                        Already a user?
                        <Form.Link to='/signin'> Sign in now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer></FooterContainer>
        </>
    );
}

export default Signup;