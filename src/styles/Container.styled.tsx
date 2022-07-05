import styled from "styled-components";
import searchIcon from "../Assets/Vector.png";

export const Container =styled.header`
display: flex;
flex-direction: column;
align-items: center;

h1{
    font-family:"Roboto Mono";
    font-size: 48px;
    font-weight: 400;
    margin-top: 23px;
}

form {
    margin-top: 40px;
    margin-bottom: 66px;
}

input[type="text"] {
    padding: 12px 16px;
    width: 300px;
    height: 43px;
    font-family: "Rubik";
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    background: transparent url(${searchIcon});
    background-repeat: no-repeat;
    background-position: right;
    background-position: calc(100% - 20px) center;
    
    &:focus::placeholder {
        color: white;
      }
}
@media(max-width:468px) {
    h1{
        font-size: 36px;
    }}

`