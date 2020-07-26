const validate = (value) => {
   let error = null;
   let val = Number(value);

   if (val === "") {
      error = "Please fill out with a number";
   } else if (!Number.isInteger(val)) {
      error = "Please fill out with an integer";
   }

   return error;
};

export default validate;
