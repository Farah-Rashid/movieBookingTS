import React from 'react'
import { ButtonStyle } from '../Button/Button.styled';

interface props {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  children: React.ReactNode

}
const Button = (props: props) => {
  return <ButtonStyle data-testid="buttonItem" onClick={props.onClick}>{props.children}</ButtonStyle>
}

export default Button;