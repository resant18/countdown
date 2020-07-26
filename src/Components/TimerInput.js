import React from "react";

const TimerInput = ({ startInMinutes, handleInput }) => {
   return (
      <input
         id='timerInput'
         type='number'         
         value={startInMinutes}
         onChange={handleInput}
      />
   );
};

export default TimerInput;
