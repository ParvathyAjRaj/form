import React, { useState,useRef } from "react";
import './Login.css';

let login_form = {"username":'',
                    "password":'',
                    "validation":false};

function Login({mainAlert}){
    const inputUser = useRef();
    const inputPwd = useRef();
    const [username,setUsername] = useState(null);
    const [alertUsername,setAlertUsername] = useState(false);
    const [password,setPassword] = useState(null);
    const [alertPassword,setAlertPassword] = useState(false);

    function handleUser(event){
        setUsername(inputUser.current.value);
        setAlertUsername(false);
        // mainAlert(true);
    }

    function handlePwd(){
        setPassword(inputPwd.current.value);
        setAlertPassword(false);
        // mainAlert(true);
    }

    function handleSave(){
        if (username !== null && username.length >= 4){
            setAlertUsername(false);
            login_form["username"] = username;
        }else{
            setAlertUsername(true);
        }
        if(password !== null && password.length >=8 && password.length <=25){
            setAlertPassword(false);
            login_form["password"] = password;
        }
        else{
            setAlertPassword(true);
        }
        if(alertUsername === false && alertPassword === false){
            login_form["validation"] = true;
        }
    }

    return(
        <div className="main">
            <div className="container" id="login">
                <p className="user">
                    <label className="label">Username<span className="compulsory">*</span></label>
                    <input type="text"  ref={inputUser} onChange={handleUser} className="inputbox" defaultValue={login_form["username"]}></input>
                </p>
                
                {alertUsername === true ? <p className="alert"><alert>Your username should be atleast 4 letters</alert> </p> : null}
        
                <p className="pwd">
                    <label className="label">Password<span className="compulsory">*</span></label>
                    <input type="password" ref={inputPwd} onChange={handlePwd} className="inputbox" defaultValue={login_form["password"]}></input>  
                </p>
                
                {alertPassword === true ? <p className="alert"><alert>Your password should be atleast 8 letters length [maximum of 25 letters length]</alert> </p>: null}
                
            </div>
            <div>
                    <button onClick={handleSave} className="addbutton">Save</button>
            </div>
        </div>
        
    )
}

export {Login,login_form};