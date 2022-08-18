import React from 'react'
import { ButtonStyle } from '../Button.styled';

interface props {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode

}
const Button = (props: props) => {
  return <ButtonStyle onClick={props.onClick}>{props.children}</ButtonStyle>
}

export default Button;