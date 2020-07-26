import React from 'react';
import { Provider } from './RadioGroupContext';

const RadioGroup = ({ selected, onChange, name, children, className }) => (
   <Provider
      value={{
         selected,
         onChange,
         name,         
         className,
      }}
   >
      {children}
   </Provider>
);

export default RadioGroup;
