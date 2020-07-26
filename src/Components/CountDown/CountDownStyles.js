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
   }
`;

export const StartButtonSection = styled.div``;

export const Notification = styled.h1`
   font-size: 2em;
`;

export const TimerSection = styled.div`
   font-size: 6em;
   display: flex;
   justify-content: center;
`;

export const SpeedOptionSection = styled.div`
   display: flex;
`