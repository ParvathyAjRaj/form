import React,{useRef, useState} from "react";

let address_details = {};

function Address(){
    const address = useRef();
    const city = useRef();
    const state = useRef();
    const zipcode = useRef();
    const [userAddress,setUserAddress] = useState({address:null,city:null,state:null,zipcode:null});

    function handleChange(event){
        if (event.target.name === "address_name"){
            const addr = address.current.value;
            setUserAddress({...userAddress,address:addr});
        }
    }

    function handleAdd(){
        address_details = {
            address:userAddress.address,
        }
        // console.log(address_details);
    }

    return(
        <div className="address">
            <div className="line1">
                <label>Address</label>
                <input name="address_name" ref={address} onChange={handleChange}></input>
            </div>
            <div className="city">
                <label>City</label>
                <input name="city_name" ref={city}></input>
            </div>
            <div className="state">
                <label>State</label>
                <input name="state_name" ref={state}></input>
            </div>
            <div className="zip">
                <label>Zipcode</label>
                <input name="zipcode_name" ref={zipcode}></input>
            </div>
            <div>
                <button onClick={handleAdd}>Add</button>
            </div>
            <h1>{address_details.address}</h1>
        </div>
    );
}

export  {Address,address_details};