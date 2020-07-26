import styled from 'styled-components';

export const RadioButtonInput = styled.input`
   cursor: pointer;

   &[type="radio"] {
      opacity: 0;
      position: fixed;
      width: 0;
   }

   &[type="radio"]:checked + label {
      background-color: #6c6c6c;
      border-color: #272727;
   }

   &[type="radio"]:focus + label {
      border: 2px dashed #444;
   }   
`;
   
   export const RadioButtonLabel = styled.label`
      cursor: pointer;
      display: inline-block;
      padding: 10px 20px;
      font-size: 1em;
      border: 3px solid #444;
      border-radius: 4px;
      width: 60px;
      text-align: center;
      font-weight: 500;
      margin: 0 10px;
   
      &:hover {
         background-color: #dfd;
      }
`;

