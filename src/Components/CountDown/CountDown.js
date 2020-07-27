import React, { useState, useEffect } from 'react';
import TimerInput from '../TimerInput';
import validate from '../../validation';
import Timer from '../Timer/Timer';
import RadioGroup from '../RadioGroupButton/RadioGroup';
import RadioButton from '../RadioGroupButton/RadioButton';
import { Wrapper, Content, Label, Error, TimerInputSection, Notification, TimerSection, SpeedOptionSection } from './CountDownStyles';

const CountDown = () => {
   const [startInMinutes, setStartInMinutes] = useState('');
   const [minutes, setMinutes] = useState(0);
   const [seconds, setSeconds] = useState(0);
   const [isActive, setIsActive] = useState(false);
   const [isPaused, setIsPaused] = useState(false);
   const [isOver, setIsOver] = useState(false);
   const [isHalfway, setIsHalfway] = useState(false);
   const [className, setClassName] = useState('');   
   const [selectedSpeed, setSelectedSpeed] = useState('1');
   const [error, setError] = useState(null);

   let timeLeft;

   const handleInput = (e) => {
      e.preventDefault();

      let mins = e.target.value; 
      let error = validate(mins);
      setError(error);         
      if (error) {         
         setMinutes(0);
      }     
      else {         
         setStartInMinutes(mins);
         setMinutes(Number(mins));      
      }
   };

   const tick = () => {      
      timeLeft = minutes * 60 + seconds;

      timeLeft--;
      if (timeLeft < 0) {
         setIsOver(true);
      } else {
         let min = Math.floor(timeLeft / 60);
         setMinutes(min);
         setSeconds(timeLeft - min * 60);
         checkTimeLeft();
      }
   };

   const reset = () => {
      timeLeft = startInMinutes * 60;
      setMinutes(startInMinutes);
      setSeconds(0);
   };

   const handleCountDown = (state) => {
      setError(validate(startInMinutes));
      if (startInMinutes > 0) {
         if (state === 'start') {
            setIsActive(true);
            reset();
         } else if (state === 'pause') {
            setIsActive((isActive) => !isActive);
            setIsPaused((isPaused) => !isPaused);            
         }
      }
   };

   const checkTimeLeft = () => {
      let mins = startInMinutes;
      let halfTime = Math.floor((mins * 60) / 2);

      timeLeft <= halfTime ? setIsHalfway(true) : setIsHalfway(false);
      if (timeLeft <= 10) {
         setClassName('red blink');
      } 
      else if (timeLeft <= 20) {
         setClassName('red');         
      }
      else {
         setClassName('');
      }
   };

   const renderNotification = () => {
      if (isOver) {
         return `Time's up!`;
      } else if (isHalfway) {
         return 'More than halfway there!';
      } else return null;
   };

   useEffect(() => {
      let timerId;
      let speed = 1000 / Number(selectedSpeed);

      if (isActive) {
         timerId = setInterval(() => {
            tick();
         }, speed);
      } else if (!isActive && minutes > 0 && seconds > 0) {
         clearInterval(timerId);
      }

      return () => clearInterval(timerId);
   });

   const handleSpeed = ({ target: { value } }) => {            
      setSelectedSpeed(value);
   };   

   return (
      <Wrapper>
         <Content>
            <Error>{error}</Error>
            <TimerInputSection>
               <Label htmlFor='timeInput'>Countdown: </Label>
               <TimerInput startInMinutes={startInMinutes} placeholder={'(Mins)'} handleInput={handleInput} />
               <input type='button' value='START' className='start-button' onClick={(e) => handleCountDown('start')} />
            </TimerInputSection>            
            <Notification>{renderNotification()}</Notification>
            <TimerSection>
               <Timer minutes={minutes} seconds={seconds} className={className} />
               <input type='button' value='| |' className={`pause-button ${isPaused ? 'active' : 'inactive'}`} onClick={(e) => handleCountDown('pause')} />
            </TimerSection>
            <SpeedOptionSection>
               <RadioGroup name='speed' selected={selectedSpeed} onChange={handleSpeed}>
                  <RadioButton id='speed-1' label='1X' value='1' />
                  <RadioButton id='speed-1.5' label='1.5X' value='1.5' />
                  <RadioButton id='speed-2' label='2X' value='2' />
               </RadioGroup>
            </SpeedOptionSection>
         </Content>
      </Wrapper>
   );
};

export default CountDown;
