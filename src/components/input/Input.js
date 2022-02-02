import { fontSize } from '@mui/system';
import React from 'react';
import {FormInput} from "./Input.styled"

function Input({ placeholder, value, onChange, name, wideField, error }) {
  
  return (
    <div style={{display: "flex", flexDirection: "column", position:"relative"}}>
    <FormInput
      wideField={wideField}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
    />
    {error.length > 0 && <p style={{color: "red", margin:0, padding:0, fontSize: "12px"}}>{error}</p>}
    </div>
  );
}

export default Input;