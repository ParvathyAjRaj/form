import React,{useRef, useState} from "react";
import "./Address.css";

let address_details = {"address":'',
                        "city":'',
                        "state":'',
                        "zipcode":'',
                        "validation":null};

function Address(){
    const ref_address = useRef();
    const ref_city = useRef();
    const ref_state = useRef();
    const ref_zipcode = useRef();
    const [userAddress,setUserAddress] = useState({address:null,city:null,state:null,zipcode:null});
    const [isZipCodeInvalid,setZipCodeInvalid] = useState(false);

    function handleChange(event){
        if (event.target.name === "address_name"){
            const addr = ref_address.current.value;
            setUserAddress({...userAddress,address:addr});
        }
        else if(event.target.name === "city_name"){
            const city = ref_city.current.value;
            setUserAddress({...userAddress,city:city});
        }
        else if(event.target.name === "state_name"){
            const state = ref_state.current.value;
            setUserAddress({...userAddress,state:state});
        }
        else if(event.target.name === "zipcode_name"){
            const zipcode = ref_zipcode.current.value;
            setUserAddress({...userAddress,zipcode:zipcode});
        }
        else{
            return
        }
    }

    function handleAdd(){
        if(userAddress.address !== null){
            address_details["address"] = userAddress.address;
        }
        if(userAddress.city !== null){
            address_details["city"] = userAddress.city;
        }
        if(userAddress.state !== null){
            address_details["state"] = userAddress.state;
        }
        if(isNaN(userAddress.zipcode) === false){
            setZipCodeInvalid(false);
            address_details["zipcode"] = userAddress.zipcode;
        }
        else{
            setZipCodeInvalid(true);
        }
        if(address_details["address"] === '' ||  address_details["city"] === '' || address_details["state"] === '' || isZipCodeInvalid === true){
            address_details["validation"] = false;
        }else{
            address_details["validation"] = true;
        }
        
    }

    return(
        <div className="address">
            <div className="user_address">
                <label>Address <span className="compulsory">*</span></label>
                <input className="inputbox" name="address_name" ref={ref_address} onChange={handleChange} defaultValue={address_details["address"]}></input>
            </div>
            <div className="city">
                <label>City <span className="compulsory">*</span></label>
                <input className="inputbox" name="city_name" ref={ref_city} onChange={handleChange} defaultValue={address_details["city"]}></input>
            </div>
            <div className="state">
                <label>State <span className="compulsory">*</span></label>
                <input className="inputbox" name="state_name" ref={ref_state} onChange={handleChange} defaultValue={address_details["state"]}></input>
            </div>
            <div className="zip">
                <label>Zipcode <span className="compulsory">*</span></label>
                <input className="inputbox" name="zipcode_name" ref={ref_zipcode} onChange={handleChange} defaultValue={address_details["zipcode"]}></input>
            </div>
            <div className="alert">
                {isZipCodeInvalid === true ? <h2>Your zipcode should be 6 digit number only</h2> : null}
            </div>
            <div>
                <button onClick={handleAdd} className="addbutton">Add</button>
            </div>
        </div>
    );
}

export  {Address,address_details};