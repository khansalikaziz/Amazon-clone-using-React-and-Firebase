import React, { useState } from 'react'
import './Login.css'

import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const Login = () => {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();//prevent from reloading
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                if (auth) {
                    history("/");
                }
            })
            .catch(error => alert(error.message))

    }
    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //successfully created user with email and password
                console.log(auth)
                if (auth) {
                    history("/");
                }
            })
            .catch(error => alert(error.message))
    }
    return (

        <div className='login'>
            <Link to="/">
                <img className='login__logo' src='https://firebasestorage.googleapis.com/v0/b/by-salik.appspot.com/o/Asset%2Floginpng.png?alt=media&token=62f49946-b1d9-4294-a57a-7c40e0d1e439' alt="" />
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <hr />
                <form>
                    <h5>E-mail</h5>
                    <input type="text" placeholder='Enter your email' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" placeholder='Enter your password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button className='login__signInButton' onClick={signIn} type='submit'>Sign In</button>
                </form>
                <p>By signing-in you agree to Amazon's Fake Clone Coditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Intrest-Based Ads Notice.</p>
                <button className='login__registerButton' onClick={register}>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login