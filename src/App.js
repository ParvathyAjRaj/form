import './App.css';
import StepProgressBar from './components/StepProgressBar';
import { Container,Row,Col,Button} from 'react-bootstrap';
import { useState } from 'react';
import {Login,login_form} from "./components/Login";
import Result from "./components/Results";
import OkPage from "./components/OkPage"

function App() {
  const [index,setIndex] = useState(1);
  const [completed,setCompleted] = useState(false);

  function handlePrev(){
    const prevIndex = index;
    setIndex(prevIndex - 1);
  }

  function handleNext(){
    const prevIndex = index;
    setIndex(prevIndex + 1);
  }

  function Check(){
    if (index === 1){
      return(<Login/>)
    }
    if(index === 4){
      const username = login_form[0];
      return(<Result 
        user = {username}/>);
    }
  }

  function handleSubmit(){
    console.log("entered handle submit");
    setCompleted(true);
  }

  return (
    <div className='App'>
      {completed === false ? 
        <Container className='h-100'>
        <Row>
          <Col className='mt-5'>
            <StepProgressBar step={index}/>
          </Col>
        </Row>
        <Row>
          <Check/>
        </Row>
        <Row className='mb-10'>
          <Col>
            <Button disabled={index === 1} onClick={handlePrev}>Previous</Button>
          </Col>
          <Col>
           <Button disabled={index === 4} onClick={handleNext}>Next</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button disabled={index < 4} onClick={handleSubmit}>Submit</Button>
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
