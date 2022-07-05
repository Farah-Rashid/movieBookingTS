import styled from "styled-components";

export const Empty = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 181px;

h2{
    margin-bottom: 48px;
    font-family: "Rubik";
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    
}

img{
    height: 447px;
    width: 620px;
}



@media(max-width:768px){
    width:100%
    h2{
        margin-top: -40px;
        font-size: 20px;
        margin-bottom: 24px;
        text-align: center;
    }

    img {
        height: 200px;
        width: 220px;
        margin: 24px auto 181px auto;

    }
}
`