import React from "react";
import { Consumer } from "./RadioGroupContext";

const RadioButton = ({ value, label }) => (
   <Consumer>
      {({ selected, onChange, name }) => {
         const radioProps = {
            value: value,
            name,
            label: label,
            onChange,
         };

         if (selected) radioProps.checked = selected === value;

         return (
            <label>
               <input type='radio' {...radioProps} />
               {label}
            </label>
         );
      }}
   </Consumer>
);

export default RadioButton;
