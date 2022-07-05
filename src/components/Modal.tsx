import React from 'react'
import close from "../Assets/Xclose.png"
import {
  ModalStyle,
  CloseButton,
  DataFlex,
  MoviePic,
  ModalH1,
  ModalH3,
  ModalH5,
  ModalSmall,
  ModalDiv,
  ModalDivSeat,
  ModalSeatH1,
} from "../styles/Booking.styled";

type Props = {
movie:string;
selectedSeats:string[];
setSelectedSeats:(arr: string[]) => void;
setModalVisible:(arr: boolean) => void;
setBgClick:(arr:boolean)=>void;
}

const Modal = ({movie,selectedSeats,setModalVisible,setSelectedSeats,setBgClick}: Props) => {
  const modalClose = () => {
   setModalVisible(false);
   setSelectedSeats([]);
   setBgClick(true);
    };

  return (
    <ModalStyle>
    <CloseButton onClick={modalClose} src={close} alt="close" />
    <ModalH1>Thank you for booking</ModalH1>
    <ModalH3>Order Summary</ModalH3>
    < ModalDiv>

      <MoviePic src={movie} alt="movie" />

      <article>
        <h3>Seats:</h3>
        <ModalDivSeat>
          {selectedSeats.map((seat, index) => {
            return <ModalSeatH1 key={index}>{seat},</ModalSeatH1>;
          })}
          
        </ModalDivSeat>
        <DataFlex>
          <article>
            <ModalH5>{selectedSeats.length}*250</ModalH5>
            <br />
            <ModalSmall>CGST(12%)</ModalSmall>
            <br />
            <ModalSmall>SGST(12%)</ModalSmall>
          </article>
          <article style={{textAlign:"right"}}>
            <ModalH5>{selectedSeats.length*250}</ModalH5>
            <br />
            <ModalSmall>{12*(1/100)*(selectedSeats.length*250)}</ModalSmall>
            <br />
            <ModalSmall>{12*(1/100)*(selectedSeats.length*250)}</ModalSmall>
          </article>
        </DataFlex>
        <hr />
        <DataFlex>
          <ModalH5>Total</ModalH5>
          <ModalH5>{(selectedSeats.length*250)+(12*(1/100)*(selectedSeats.length*250))*2}</ModalH5>
        </DataFlex>
      </article>
    </ModalDiv>
  </ModalStyle>
  )
}

export default Modal;