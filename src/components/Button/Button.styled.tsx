import styled from "styled-components";
export const ButtonStyle = styled.button`
  height: 43px;

  background-color: #352c9a;
  color: #ffffff;
  font-family: "Rubik";
  font-size: 16px;
  font-weight: 500;
  border-style: none;

  button:hover {
    background-color: #724fd8;
  }

  button:active {
    background-color: #724fdf;
    text-decoration: underline;
  }

  button:disabled {
    background-color: #626262;
  }
`;
