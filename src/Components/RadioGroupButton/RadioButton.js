import React from 'react';
import { Consumer } from './RadioGroupContext';
import { RadioButtonInput, RadioButtonLabel } from './RadioButtonStyles';

const RadioButton = ({ id, value, label }) => (
   <Consumer>
      {({ selected, onChange, name }) => {
         const radioProps = {
            id, 
            value: value,
            name,
            label: label,
            onChange,
         };
         if (selected) radioProps.checked = selected === value;

         return (
            <>
               <RadioButtonInput type='radio' {...radioProps} />
               <RadioButtonLabel htmlFor={id}>{label}</RadioButtonLabel>
            </>
         );
      }}
   </Consumer>
);

export default RadioButton;
