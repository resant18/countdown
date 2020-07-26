import React from "react";

const Timer = ({ minutes, seconds }) => {
   const formatMinutes = (minutes, digit) => {
      if (digit === 2) return minutes < 10 ? "0" + minutes : minutes;
      else return minutes;
   };

   const formatSeconds = (seconds, digit) => {
      if (digit === 2) return seconds < 10 ? "0" + seconds : seconds;
      else return seconds;
   };
   
   return (
      <div>
         {formatMinutes(minutes, 2)} : {formatSeconds(seconds, 2)}
      </div>
   );
};

export default Timer;
