import React from "react";

const TimerInput = ({ startInMinutes, placeholder, handleInput }) => {
   return (
      <input
         id='timerInput'
         type='number'     
         placeholder={placeholder}    
         value={startInMinutes}
         onChange={handleInput}
      />
   );
};

export default TimerInput;
