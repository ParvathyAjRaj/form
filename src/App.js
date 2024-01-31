import './App.css';
import StepProgressBar from './components/StepProgressBar';
import { Container,Row,Col,Button} from 'react-bootstrap';
import { useState } from 'react';
import {Login,login_form} from "./components/Login";
import Result from "./components/Results";
import OkPage from "./components/OkPage";
import {Address,address_details} from "./components/Address";

function App() {
  const [index,setIndex] = useState(1);
  const [completed,setCompleted] = useState(false);
  const [isnext,setIsNext] = useState(null);

  function handlePrev(){
    const prevIndex = index;
    setIndex(prevIndex - 1);
  }
  

  function handleNext(){
    if(index === 1){
      if(login_form["validation"] === true){
        setIsNext(true);
        const prevIndex = index;
        setIndex(prevIndex + 1);
      }
      else{
        setIsNext(false);
      } 
    }else if(index === 2){
      if(address_details["validation"] === true){
        setIsNext(true);
        const prevIndex = index;
        setIndex(prevIndex + 1);
      }else{
        setIsNext(false);
      }
    }else if(index === 3){
      const prevIndex = index;
        setIndex(prevIndex + 1);
    }
      
  }

  function Check(){
    if (index === 1){
      return(<Login/>)
    }else if(index === 2){
      return(<Address/>)
    }
    if(index === 3){
      return(<Result 
        user ={login_form["username"]}
        address = {address_details["address"]}
        city={address_details["city"]}
        state={address_details["state"]}
        zipcode={address_details["zipcode"]}/>);
    }
  }

  function handleSubmit(){
    setCompleted(true);
  }

  return (
    <div className='App'>
      {completed === false ? 
        <Container className='h-100'>
          <Row className='mt-5 heading'>
            <h1>Sign-up page for the Postal.com membership</h1>
          </Row>
        <Row>
          <Col className='mt-5'>
            <StepProgressBar step={index}/>
          </Col>
        </Row>
        <Row>
          <Check/>
        </Row>
        <Row>
        <div className="validation_alert">
            {isnext === false ? <h1>Please add all the details</h1> : ''}
        </div>
        </Row>
        <Row className='mb-10'>
          <Col>
            <Button disabled={index === 1} onClick={handlePrev}>Previous</Button>
          </Col>
          <Col>
           <Button disabled={index === 3} onClick={handleNext}>Next</Button>
          </Col>
        </Row>
        <Row className='mb-10'>
          <Col>
            <Button disabled={index < 3} onClick={handleSubmit}>Submit</Button>
          </Col>
        </Row>
      </Container>
      : 
      <div><OkPage/></div>
      }
    </div>    
  );
}

export default App;
