import styled from 'styled-components';

export const Container = styled.div`
   &.red {
      color: red;
   }

   &.blink {
      animation: blinkingText 1.2s infinite;
   }

   @keyframes blinkingText {
      0% {
         color: red;
      }
      49% {
         color: pink;
      }
      60% {
         color: transparent;
      }
      99% {
         color: transparent;
      }
      100% {
         color: red;
      }
   }
`;