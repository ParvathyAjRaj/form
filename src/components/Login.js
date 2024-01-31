import React, { useState,useRef } from "react";
import './Login.css';

const login_form = []

function Login(){
    const inputUser = useRef();
    const inputPwd = useRef();
    const [username,setUsername] = useState(null);
    const [alertUsername,setAlertUsername] = useState(false);
    const [password,setPassword] = useState(null);
    const [alertPassword,setAlertPassword] = useState(false);

    function handleUser(){
        setUsername(inputUser.current.value);
    }
    

    function handlePwd(){
        setPassword(inputPwd.current.value);
    }

    function handleAdd(){
        if (username !== null && username.length >= 4){
            setAlertUsername(false);
            login_form.push(username);
        }else{
            setAlertUsername(true);
        }
        if(password !== null && password.length >=8 && password.length <=25){
            setAlertPassword(false);
            login_form.push(password);
        }
        else{
            setAlertPassword(true);
        }
    }

    return(
        <div className="login">
            <div className="user">
                <label>Username</label>
                <input type="text" ref={inputUser} onChange={handleUser} className="inputbox"></input>
            </div>
            <div className="alert">
                    {alertUsername === true ? <alert>Your username should be atleast 4 letters</alert> : null}
            </div>
            <div className="pwd">
                <label className="label">Password</label>
                <input type="password" ref={inputPwd} onChange={handlePwd} className="inputbox"></input>  
            </div>
            <div className="alert">
                    {alertPassword === true ? <alert>Your password should be atleast 8 letters length [maximum of 25 letters length]</alert> : null}
            </div>
            <div>
                <button onClick={handleAdd} className="addbutton">Add</button>
            </div>
        </div>
    )
}

export {Login,login_form};