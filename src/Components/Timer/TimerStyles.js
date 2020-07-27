import styled from 'styled-components';

export const Container = styled.div`
   &.red {
      color: red;
   }

   &.blink {
      animation: blinkingText 1.2s infinite;
   }

   @keyframes blinkingText {
      0% { opacity: 1.0; }
      50% { opacity: 0.0; }
      100% { opacity: 1.0; }
   }
`;