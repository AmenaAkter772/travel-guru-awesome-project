import { Button, Container } from 'react-bootstrap';
import facebook from '../../image/Icon/fb.png'
import google from '../../image/Icon/google.png'
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { createUserWithEmailAndPassword, googleSingInHandler, handleFbLogin, initializeLoginFrameWork, signInWithEmailAndPassword } from './LoginManager';




const Login = () => {
    const [user, setUser] = useState({
        isSignIn:false,
        name:'',
        firstName:'',
        lastName:'',
        email:'',
        error: '',
        password:'',
        confirmPassword:'',
        success:false,
    })
    
    const [errorMessage, setErrorMessage] = useState('');
    const [newUser, setNewUser] = useState(false)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    
    initializeLoginFrameWork();
    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if(redirect){
            history.replace(from)
        }
    }
     // google signIn 
    const googleSingIn = () => {
        googleSingInHandler()
        .then( res => {
            handleResponse(res,true)
          })
    }

    //fb login
    const facebookLogin = () => {
        handleFbLogin()
            .then(res => {
                handleResponse(res, true);
            })
    }
    // // onSubmit function
    const handleOnSubmit = (e) => {
        if(user.password === user.confirmPassword){
            if(newUser && user.email && user.password){
                createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res,true)
                })
            }
        }
        else{
            errorMassage('Password not matched.Try again')
        }

        if(!newUser && user.email && user.password){
            signInWithEmailAndPassword(user.email, user.password)
          .then(res => {
            handleResponse(res,true)
          })
        }
        e.preventDefault();
    }

    


    // email or password valid
    const handleBlur = (e) => {
        let fieldValid = true;
        if(e.target.name === 'email'){
            fieldValid = /\S+@\S+\.\S+/.test(e.target.value);
            if (!fieldValid) {
                errorMassage('Email is not valid. Enter a valid email')
            }
        }
        if(e.target.name === 'password'){
            const passwordValid = e.target.value.length > 4;
            const passwordNumber = /\d{1}/.test(e.target.value)
            fieldValid = passwordValid && passwordNumber;
            if(!fieldValid) {
                errorMassage('password is not valid. Password must be 4 latter or 1 number')
            }
        }
        if(e.target.name === 'confirmPassword'){
            const passwordValid = e.target.value.length > 4;
            const passwordNumber = /\d{1}/.test(e.target.value)
            fieldValid = passwordValid && passwordNumber;
            if(!fieldValid) {
                errorMassage('password is not matched. try again')
            }
        }
        if(e.target.name === 'firstName'){
            fieldValid = e.target.value.length > 4;
            if(!fieldValid){
                errorMassage('Name should be at least 4 latter.')
            }
        }
        if(e.target.name === 'lastName'){
            fieldValid = e.target.value.length > 4;
            if(!fieldValid){
                errorMassage('Name should be at least 4 latter.')
            }
        }
        
        if(fieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }

    }
    //error errorMassage
    const errorMassage = msg => {
        setErrorMessage(msg);
    }
    return (
        <Container style={{backgroundColor:'white', textAlign:'center', width:'450px', borderRadius:'20px'}}>
            <form onSubmit={handleOnSubmit}>
            
                {
                    errorMessage !== '' && <p style={{color:'red'}}>{errorMessage}</p>
                }
                    
                    <h3>Create an account</h3>
                    <input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)} id=""/>
                    <label htmlFor="newUser">{newUser ? 'Already have an account?' : 'Dont have an account?'}</label><br/>
                    {newUser &&  <input onBlur={handleBlur} name="firstName" type="text" placeholder="First Name" required/>}<br/>
                    {newUser && <input onBlur={handleBlur} name="lastName" type="text" placeholder="Last Name" required/>}<br/>
                    <input onBlur={handleBlur} name="email" type="email" placeholder="Email" required/><br/>
                     <input onBlur={handleBlur} name="password" type="password" placeholder="Password" required/><br/>
                    {newUser && <input onBlur={handleBlur} name="confirmPassword" type="password" placeholder="Confirm Password" required/>}<br/>
                    <Button variant="danger" type="submit" style={{width:'180px'}}>{newUser ? 'create an account' : 'Login'}</Button><br/>
                    
                    
            </form>
            <>
            <h4>Or</h4>
           <div onClick={facebookLogin} style={{cursor:'pointer', display:'flex', marginLeft:'100px'}}>
               <><img style={{width:'30px'}} src={facebook} alt=""/></>
               <><p style={{marginLeft:'20px'}}>Continue with facebook</p></>
                
            </div>
            <div onClick={googleSingIn} style={{cursor:'pointer', display:'flex', marginLeft:'100px'}}>
                
               <><img style={{width:'30px'}} src={google} alt=""/></>
               <><p style={{marginLeft:'20px'}}>Continue with google</p></>
            </div>
            </>
        </Container>
    );
};

export default Login;