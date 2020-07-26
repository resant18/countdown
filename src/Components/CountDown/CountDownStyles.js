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
`;

export const Label = styled.label`
   margin-right: 10px;
`;

export const Error = styled.p`
   color: red;   
   text-align: center;
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
      color: white;
      cursor: pointer;
      border: 0 solid;
      box-shadow: inset 0 0 20px rgba(13, 255, 255, 0);
      outline: 1px solid;
      outline-color: rgba(13, 255, 255, .5);
      outline-offset: 0px;
      text-shadow: none;
      transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

      &:hover {
         border: 1px solid;
         background-color: #f6b93b;
         box-shadow: inset 0 0 20px rgba(13, 255, 255, .5), 0 0 20px rgba(13, 255, 255, .2);
         outline-color: rgba(13, 255, 255, 0);
         outline-offset: 15px;
         text-shadow: 1px 1px 2px #427388; 
      }
   }
`;

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
      0%{opacity: 0;}
      50%{opacity: .5;}
      100%{opacity: 1;}
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

   input.active {
      background-color: #f6b93b;
   }

   input.inactive {
      background-color: transparent;
   }

   input.pause-button {
      border-radius: 50%;
      width: 80px;
      height: 80px;      
      border: 4px solid;
      font-size: 0.2em;
      font-weight: 700;
      cursor: pointer;
      outline: 0;

      &:focus, &:hover {
         color: #ffffff !important;
         background: #f6b93b;
         border-color: #f6b93b !important;
         transition: all 0.4s ease 0s;
      }
   }   
`;

export const SpeedOptionSection = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 50px;   
`