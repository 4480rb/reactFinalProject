import React, { useState } from 'react';
import '../styles/login.css'
import {SignIn ,SignUp}from '../API/loginApi';
import { Route } from 'react-router-dom';
import Settings from './Settings';
// import { useHistory } from "react-router-dom";

function Login(){
    // const history = useHistory();

    const [BusinessName, setBusinessName] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatpassword, setRepeatpassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState(0);
    //const [address, setAddress] = useState("");


   const  handleSubmit=async()=>{
        const user={
        BusinessName:BusinessName,
        ownerName:ownerName,
        email:email,
        password:password,
        phoneNumber:phoneNumber,
        //address:address
    }
    const createdUser=await SignUp(user).then(data=>{
        console.log(`data:${data}`);

    })
    if(createdUser)
    alert(createdUser)
    };

    const  handleSubmit2=async(email,password)=>{
        var Email=email;
        var Password=password
        // history.push("/Settings")
    const logindUser=await SignIn(Email,Password);
    if(logindUser)
    alert(logindUser)
    };

    return (
        <div className="login-wrap">
            <div className="login-html">

                <input id="tab-1" type="radio" name="tab" className="sign-in" /><label htmlFor="tab-1" className="tab">Sign In</label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up"/><label htmlFor="tab-2" className="tab">Sign Up</label>
                        <div className="login-form">
                            <div className="sign-in-htm">
                                <div className="group">
                                    <label htmlFor="user" className="label">Username</label>
                                    <input id="user" type="text" className="input"  onChange={(b) => setEmail(b.target.value)}
                                    />
                                </div>
                                <div className="group">
                                    <label htmlFor="pass" className="label">Password</label>
                                    <input id="pass" type="password" className="input" data-type="password"  onChange={(b) => setPassword(b.target.value)}
                                    />
                                </div>
                                <div className="group">
                                    <input id="check" type="checkbox" className="check" />
                                        <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
                                </div>
                                <div className="group">
                                    <input type="button" className="button" value="Sign In" onClick={()=>handleSubmit2(email,password)}/>
                                </div>
                                <div className="hr"></div>
                                <div className="foot-lnk">
                                    <a href="#forgot">Forgot Password?</a>
                                </div>
                            </div>
                            <div className="sign-up-htm">
                            <div className="group">
                                    <label htmlFor="businessUser" className="label">Business name</label>
                                    <input id="businessUser" type="text" className="input"  onChange={(b) => setBusinessName(b.target.value)}></input>
                                    
                                </div>
                                <div className="group">
                                    <label htmlFor="user" className="label">User name</label>
                                    <input id="user" type="text" className="input"  onChange={(b) => setOwnerName(b.target.value)}/>
                                </div>
                                <div className="group">
                                    <label htmlFor="email" className="label">Email Address</label>
                                    <input id="email" type="text" className="input"  onChange={(b) => setEmail(b.target.value)}/>
                                </div>
                                <div className="group">
                                    <label htmlFor="password" className="label">Password</label>
                                    <input id="password" type="password" className="input" data-type="password" onChange={(b) => setPassword(b.target.value)}/>
                                </div>
                                <div className="group">
                                    <label htmlFor="repeatPassword" className="label">Repeat Password</label>
                                    <input id="repeatPassword" type="password" className="input" data-type="password" onChange={(b) => setRepeatpassword(b.target.value)}
                                    
                                    />
                                </div>
                                <div className="group">
                                    <label htmlFor="phoneNumber" className="label">phoneNumber</label>
                                    <input id="phoneNumber" type="text" className="input"  onChange={(b) => setPhoneNumber(b.target.value)}/>
                                </div>
                                {/* <div className="group">
                                    <label htmlFor="address" className="label">address</label>
                                    <input id="address" type="text" className="input"  onChange={(b) => setAddress(b.target.value)}/>
                                </div> */}

                                <div className="group">
                                    <input type="button" className="button" value="Sign Up" onClick={handleSubmit}/>
                                </div>
                                <div className="hr"></div>
                                <div className="foot-lnk">
                                    <label htmlFor="tab-1">Already Member?</label>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    )}
    export default Login
            