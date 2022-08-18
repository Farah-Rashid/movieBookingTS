import React from 'react'
import { useParams } from 'react-router';
import close from "../Assets/Xclose.png"
import { imgUrl } from '../GlobalConstants'
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
  ModalSeatH3,
  ModalScreen,
} from "../styles/Booking.styled";

type Props = {
  selectedSeats: string[];
  setSelectedSeats: (arr: string[]) => void;
  setModalVisible: (arr: boolean) => void;
}

const Modal = ({ selectedSeats, setModalVisible, setSelectedSeats }: Props) => {
  const modalClose = () => {
    setModalVisible(false);
    setSelectedSeats([]);
  };
  const param = useParams();
  const imgPath = localStorage.getItem(param.title || '{}')
  return (
    <ModalScreen>
      <ModalStyle>
        <CloseButton onClick={modalClose} src={close} alt="close" />
        <ModalH1>Thank you for booking</ModalH1>
        <ModalH3>Order Summary</ModalH3>
        < ModalDiv>
          <MoviePic src={imgUrl + imgPath} alt="movie" />
          <article>
            <ModalSeatH3>Seats:</ModalSeatH3>
            <ModalDivSeat>
              <ModalSeatH1>{selectedSeats.toString()}</ModalSeatH1></ModalDivSeat>
            <DataFlex>
              <article>
                <ModalH5>{selectedSeats.length}*250</ModalH5>
                <br />
                <ModalSmall>CGST(12%)</ModalSmall>
                <br />
                <ModalSmall>SGST(12%)</ModalSmall>
              </article>
              <article >
                <ModalH5>{selectedSeats.length * 250}</ModalH5>
                <br />
                <ModalSmall>{12 * (1 / 100) * (selectedSeats.length * 250)}</ModalSmall>
                <br />
                <ModalSmall>{12 * (1 / 100) * (selectedSeats.length * 250)}</ModalSmall>
              </article>
            </DataFlex>
            <hr />
            <DataFlex>
              <ModalH5>Total</ModalH5>
              <ModalH5>{(selectedSeats.length * 250) + (12 * (1 / 100) * (selectedSeats.length * 250)) * 2}</ModalH5>
            </DataFlex>
          </article>
        </ModalDiv>
      </ModalStyle>
    </ModalScreen>
  )
}

export default Modal;