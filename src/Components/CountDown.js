import React, { useState, useEffect } from "react";
import TimerInput from "./TimeInput";
import Timer from "./Timer";

const CountDown = () => {
   const [startInMinutes, setStartInMinutes] = useState("");
   const [minutes, setMinutes] = useState(0);
   const [seconds, setSeconds] = useState(0);
   const [isActive, setIsActive] = useState(false);

   const handleInput = (e) => {
      e.preventDefault();

      let mins = Number(e.target.value);      
      setStartInMinutes(mins);
      setMinutes(mins);
   };

   return (
      <div>
         <label htmlFor='timeInput'>CountDown: </label>         
         <TimerInput startInMinutes={startInMinutes} handleInput={handleInput} />         
         <Timer minutes={minutes} seconds={seconds} />         
      </div>
   );
};

export default CountDown;
