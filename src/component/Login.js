import React, { useState } from 'react';
import '../styles/login.css'
import createUser from '../API/signUp';

function Login() {
    const [BusinessName, setBusinessName] = useState();
    const [ownerName, setOwnerName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [repeatpassword, setRepeatpassword] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [address, setAdress] = useState("");

    handleSubmit=async()=>{
        const user={
        BusinessName:BusinessName,
        ownerName:ownerName,
        email:email,
        password:password,
        phoneNumber:phoneNumber,
        address:address
    }
    const createdUser=await createUser(user).then(data=>{
        console.log("data");
    })
    if(createUser)
    alert(createUser)
    }
    return (
        <div class="login-wrap">
            <div class="login-html">

                <input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Sign In</label>
                    <input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab">Sign Up</label>
                        <div class="login-form">
                            <div class="sign-in-htm">
                                <div class="group">
                                    <label for="user" class="label">Username</label>
                                    <input id="user" type="text" class="input"  onChange={(b) => setOwnerName(b.target.value)}/>
                                </div>
                                <div class="group">
                                    <label for="pass" class="label">Password</label>
                                    <input id="pass" type="password" class="input" data-type="password"  onChange={(b) => setPassword(b.target.value)}/>
                                </div>
                                <div class="group">
                                    <input id="check" type="checkbox" class="check" checked/>
                                        <label for="check"><span class="icon"></span> Keep me Signed in</label>
                                </div>
                                <div class="group">
                                    <input type="submit" class="button" value="Sign In"/>
                                </div>
                                <div class="hr"></div>
                                <div class="foot-lnk">
                                    <a href="#forgot">Forgot Password?</a>
                                </div>
                            </div>
                            <div class="sign-up-htm">
                            <div class="group">
                                    <label for="user" class="label">Business name</label>
                                    <input id="user" type="text" class="input"  onChange={(b) => setBusinessName(b.target.value)}></input>
                                    
                                </div>
                                <div class="group">
                                    <label for="user" class="label">User name</label>
                                    <input id="user" type="text" class="input"  onChange={(b) => setOwnerName(b.target.value)}/>
                                </div>
                                <div class="group">
                                    <label for="pass" class="label">Email Address</label>
                                    <input id="pass" type="text" class="input"  onChange={(b) => setEmail(b.target.value)}/>
                                </div>
                                <div class="group">
                                    <label for="pass" class="label">Password</label>
                                    <input id="pass" type="password" class="input" data-type="password" onChange={(b) => setPassword(b.target.value)}/>
                                </div>
                                <div class="group">
                                    <label for="pass" class="label">Repeat Password</label>
                                    <input id="pass" type="password" class="input" data-type="password" onChange={(b) => setRepeatpassword(b.target.value)}/>
                                </div>
                                <div class="group">
                                    <label for="pass" class="label">phoneNumber</label>
                                    <input id="pass" type="text" class="input"  onChange={(b) => setPhoneNumber(b.target.value)}/>
                                </div>
                                <div class="group">
                                    <label for="pass" class="label">address</label>
                                    <input id="pass" type="text" class="input"  onChange={(b) => setAdress(b.target.value)}/>
                                </div>

                                <div class="group">
                                    <input type="button" class="button" value="Sign Up" onClick={handleSubmit}/>
                                </div>
                                <div class="hr"></div>
                                <div class="foot-lnk">
                                    <label for="tab-1">Already Member?</label>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    )}
    export default Login
            