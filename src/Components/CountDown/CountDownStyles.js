import styled from 'styled-components';

export const Wrapper = styled.main`
   display: flex;
   justify-content: center;
   align-items: center;   
   margin: 25vh 0;   
`;

export const Content = styled.div`
   height: 50vh;
   font-size: 28px;
`

export const Label = styled.label`
   margin-right: 10px;
`

export const Error = styled.p`
   color: red;   
`;

export const TimerInputSection = styled.div`
   display: flex;
   line-height: 1.8em;
   justify-content: center;

   input {
      font-size: 1em;      
      width: 150px;
      padding: 10px;
      margin-right: 10px;  
      border: 1px solid;    
   }

   .start-button {
      background-color: #69b4a0;
      border: none;
      color: white;
      cursor: pointer;
   }
`;

export const StartButtonSection = styled.div``;

export const Notification = styled.h1`
   font-size: 1.5em;
   display: flex;
   justify-content: center;

   .red {
      color: red;
   }

   .blink {
      animation: blinkingText 1.2s infinite;
   }

   @keyframes blinkingText {
      0% {
         color: #000;
      }
      49% {
         color: rgb(32, 29, 29);
      }
      60% {
         color: transparent;
      }
      99% {
         color: transparent;
      }
      100% {
         color: #000;
      }
      }
`;

export const TimerSection = styled.div`
   font-size: 6em;
   display: flex;
   justify-content: center;
   align-items: center;

   div {
      width: 550px;
   }

   .pause-button {
      border-radius: 50%;
      width: 80px;
      height: 80px;
      background-color: transparent;
      border: 4px solid;
      font-size: 0.2em;
      font-weight: 700;
      cursor: pointer;
   }
`;

export const SpeedOptionSection = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 50px;   
`