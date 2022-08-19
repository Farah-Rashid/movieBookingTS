import styled from "styled-components";
import { ButtonStyle } from "../components/Button/Button.styled";
export const BookingStyles = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  ${ButtonStyle} {
    top: 245px;
    left: 89px;
    right: 87px;
    bottom: 37px;
    margin: 109px 0 152px 0;
    width: 190px;
  }
`;
export const VectorImg = styled.img`
  height: 129px;
  width: 1082px;
  margin: 46px auto 0px auto;
`;

export const BookingTableSeats = styled.table`
  margin: 75px auto 0 auto;

  th {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    padding-bottom: 44px;
  }
`;
export const SeatRow = styled.td`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  padding-right: 59px;
`;

export const ModalStyle = styled.article`
  position: absolute;
  width: 640px;
  height: 578px;
  background-color: #ffffff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
`;
export const CloseButton = styled.img`
  float: right;
  border: none;
  background-color: white;
  margin-right: 22px;
  margin-top: 18px;
`;
export const MoviePic = styled.img`
  width: 200px;
  height: 327px;
  border-radius: 20px;
  box-shadow: 0px 10px 20px 5px rgba(0, 0, 0, 0.25);
`;
export const ModalH1 = styled.h1`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  text-align: center;
  margin: 40px 0;
`;
export const ModalH3 = styled.h3`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
`;
export const ModalH5 = styled.h5`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
`;
export const ModalSmall = styled.small`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  width: 71px;
  height: 14.06px;
`;
export const DataFlex = styled.article`
  display: flex;
  justify-content: space-between;
  margin: 0px;
`;
export const ModalDiv = styled.article`
  display: flex;
  justify-content: space-around;
  margin-top: 48px;
  margin-bottom: 20px;
`;
export const ModalDivSeat = styled.article`
  display: flex;
  height: 47px;
  width: 202px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const ModalSeatH1 = styled.h1`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  text-align: center;
  margin: 0px;
`;
export const ModalScreen = styled.article`
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
`;
export const ModalSeatH3 = styled.h3`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
`;
