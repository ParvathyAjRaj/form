import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import './StepProgressBar.css';
 
function StepProgressBar(props){
    return (
      <ProgressBar
        percent={props.step === 4 ? 100 : (props.step - 1) * (100/3) }
        // filledBackground="linear-gradient(to right, #fefb72, #f0bb31)";
        filledBackground="linear-gradient(to right, #00FFFF, #89CFF0, #0096FF)"
      >
        <Step transition="scale">
          {({ accomplished }) => (
            <div className={`step ${accomplished ? "completed" : ""}`}>
                1
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div className={`step ${accomplished ? "completed" : ""}`}>
                2
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div className={`step ${accomplished ? "completed" : ""}`}>
                3
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished }) => (
            <div className={`step ${accomplished} ? "completed" : ""`}>
                4
            </div>
          )}
        </Step>
      </ProgressBar>
    );
  }

export default StepProgressBar;