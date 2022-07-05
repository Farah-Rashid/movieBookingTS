import styled from "styled-components";

export const Card = styled.article`
position: relative;

&::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    transition: 250ms ease-out;
    border-radius: 20px;
  }
  &:hover::after {
    opacity: 0.6;
    background-color: #626262;
  }

&:hover button {
    opacity:1;
}
&:hover h3 {
    opacity :1;
}
h3{
    position: absolute;
    left: 31.43%;
    right: 31.43%;
    top: 42.51%;
    bottom: 50%;
    font-family: "Rubik";
    font-size: 24px;
    font-weight: 600;
    color: #ffffff;

    text-align:center;
   z-index: 2;
   opacity:0;
  width: 111px;
  height: 56px;
  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
}

img{
    height: 374px;
    width: 350px;
    border-radius: 20px;
    box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.25);
 
}



button{
    position: absolute;
    left: 29.43%;
    right: 29.14%;
    top: 76.74%;
    bottom: 11.76%;
    height: 43px;
    width: 145px;
    background-color: #352C9A;
    color: #ffffff;
    font-family: "Rubik";
    font-size: 16px;
    font-weight: 500;

    z-index:2;
    opacity:0;
}
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
@media(max-width:1200px) {
    margin: 24px auto 24px auto;
    
img {
        width: 300px;
        height: 320px;
    }

    button {
        height: 37px;
        width: 124px;
        left: 88px;
        top: 246px;
        border-radius: 0px;

    }


@media(max-width:768px){
    margin: 24px auto 24px auto;

img{
    height: 320px;
    width: 300px;
}
button{
    Width: 124.29px;
    Height: 36.79px;
}
}

`;
export const CardDiv = styled.article`
 display:flex;
 flex-wrap:wrap;
 gap:48px 75px;

`
