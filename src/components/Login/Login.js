import React,{useState} from 'react';
import './Login.css';
import {Link,useHistory} from 'react-router-dom';
import './Login.css';
import {auth} from '../../Firebase/Firebase';

function Login() {
const history = useHistory();
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const loginHandler = (e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then((auth)=>{
        //Logged in successfully
        history.push('/');
    })
    .catch(e=>alert(e.message));
}
 
const registerHandler = (e)=>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then(auth=>{
        //Created successfully
        history.push('/');
    })
    .catch(e=>alert(e.message));
    
}
    return (
        <div className="login">
            <Link to="/">
            <img alt="logo" className="login__logo" src="https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input onChange={e=>setEmail(e.target.value)} value={email} type="email" name="email"/>
                    <h5>Password</h5>
                    <input onChange={e=>setPassword(e.target.value)} value={password} type="password" name="password"/>
                    <button  onClick={loginHandler} className="login__signInButton">Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={registerHandler} type="submit" className="login__registerButton">Create your account now</button>
            </div>
        </div>
    )
}

export default Login
