import React, { useState } from 'react';
import Input from '../input/Input';
import { v4 as uuidv4 } from 'uuid';
import { FormContainer, FormButton, InputContainer } from './Form.styled';

const initialFormValues = {
  name: '',
  email: '',
  phoneNumber: '',
};

const initialErrors = {
  name: '',
  email: '',
  phoneNumber: '',
}

function Form({onClick}) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialErrors)

  const onChange = (e) => {
    const { name, value } = e.target;
    setErrors({...errors, [name]: ""})
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(isValidForm(formValues)){
      const newUser = {
        id: uuidv4(),
        ...formValues
      }
      onClick(newUser)
      setFormValues(initialFormValues)
      setErrors(initialErrors)
    }
  };

  const isValidForm = (values) => {
    let isValid = true;
    let validationErrors = {
      name: "",
      email: "",
      phoneNumber:""
    }
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      const phoneNumberRegex = /^[+]{0,1}[0-9\b]+$/;
    if(values.name.length <=0) {
      validationErrors.name= "Name is required";
      isValid = false
    }
    if(values.phoneNumber.length <= 0) {
      validationErrors.phoneNumber= "Phone number is required";
      isValid = false
    }

    if(values.phoneNumber.length > 0 && phoneNumberRegex.test(values.phoneNumber) === false) {
      validationErrors.phoneNumber= "Phone number is not valid."
      isValid = false 
  }

    if(values.email.length <=0 || regex.test(values.email) === false) {
      validationErrors.email= "Email is not valid"
      isValid = false
    }
    setErrors(validationErrors)
    return isValid
  }
  
  return (
    <FormContainer onSubmit={onSubmit}>
      <InputContainer>
        <Input
          name="name"
          placeholder="Full name"
          onChange={onChange}
          value={formValues.name}
          error={errors.name}
        />
        <Input
          name="email"
          placeholder="E-mail address"
          onChange={onChange}
          value={formValues.email}
          wideField
          error={errors.email}
        />
        <Input
          name="phoneNumber"
          placeholder="Phone number"
          onChange={onChange}
          value={formValues.phoneNumber}
          error={errors.phoneNumber}
        />
      </InputContainer>
      <FormButton onClick={onSubmit}>Add new</FormButton>
    </FormContainer>
  );
}

export default Form;
