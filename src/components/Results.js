import React from "react";
import "./Result.css"

function Result(props){
    return(
        <div className="results">
            <h4>Please check the entries</h4>
            <div className="details">
                <p>Username 👤: {props.user}</p>
                <p>Address 🏠: {props.address}</p>
                <p>City 🛣️: {props.city}</p>
                <p>State 📍: {props.state}</p>
                <p>Zipcode 📭: {props.zipcode}</p>
            </div>
            <h4>Click Submit button if confirmed</h4>
        </div>
    )
}

export default Result;