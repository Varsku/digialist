import styled from "styled-components";


export const FormInput = styled.input`
height: 40px;
background-color: #edf2f5;
color: #505050;
font-size: 16px;
font-weight: 400;
padding: 0;
width: ${props => props.wideField ? "250px" : ""};
padding-left: 12px;
outline: none;
border:none;


::placeholder {
    color: #757575;
}
`