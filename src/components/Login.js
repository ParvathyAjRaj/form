import React, { useState,useRef } from "react";
import './Login.css';
import Result from "./Results";

const login_form = []

function Login(){
    const inputUser = useRef();
    const inputPwd = useRef();
    const [username,setUsername] = useState(null);
    const [password,setPassword] = useState(null);

    function handleUser(){
        setUsername(inputUser.current.value);
    }

    function handlePwd(){
        setPassword(inputPwd.current.value);
    }

    function handleAdd(){
        login_form.push(username);
    }

    return(
        <div className="login">
            <div className="user">
                <label>Username</label>
                <input type="text" ref={inputUser} onChange={handleUser} ></input>
            </div>
            <div className="pwd">
                <label className="label">Password</label>
                <input type="password" ref={inputPwd} onChange={handlePwd}></input>  
            
            </div>
            <div>
                <button onClick={handleAdd}>Add</button>
            </div>
        </div>
    )
}

export {Login,login_form};