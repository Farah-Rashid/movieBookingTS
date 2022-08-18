import React, { useEffect, useState } from "react";
import SeatIcon from '../Assets/SeatIcon';
import vector from "../Assets/Vector 1.png";
import seatWhite from "../Assets/SeatWhite.svg";
import seatBlue from "../Assets/SeatBlue.svg";
import blackSeat from "../Assets/SeatBlack.svg";
import { useParams } from "react-router";
import Modal from "./Modal";
import {
  BookingStyles,
  BookingTableSeats,
  ConfirmButton,
  SeatRow,
  VectorImg,
} from "../styles/Booking.styled";

type UserProp = {
  movieId: number;
  movie: string;
};

const data: {
  id: string[];
  seats: number[];
} = {
  id: ["A", "B", "C", "D"],
  seats: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
};
const bgDisplay = {
  pointerEvents: "none",
  backgroundColor: " rgba(229, 229, 229, 0.6)",
};
const bgColor = {
  backgroundColor: "white",
};

const BookingSeats = () => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [bookedSeat, setBookedSeat] = useState<string | null>("");
  const [bgClick, setBgClick] = useState<boolean>(true);

  const param = useParams();
  function handleSeats(id: string) {
    if (selectedSeats.includes(id)) {
      const updatedSeats = selectedSeats.filter((seatId) => seatId !== id);
      setSelectedSeats(updatedSeats);
    } else {
      setSelectedSeats((prevSeats) => [...prevSeats, id]);
    }
  }

  const modalHandle = () => {
    setModalVisible(true);
    setBgClick(false);
    if (selectedSeats.length === 0) {
      setModalVisible(false);
      alert(" Please select seats first");
      setBgClick(true);
      return;
    } else if (selectedSeats.length > 10) {
      setModalVisible(false);
      alert(`you can't select more than 10 seats.. 
      you have selected ${selectedSeats.length} seats.
      Please deselect ${selectedSeats.length - 10} seats`);
      setBgClick(true);
      return;
    } else {
      localStorage.setItem(
        JSON.stringify(param.id),
        bookedSeat + selectedSeats.toString()
      );
      setBookedSeat(localStorage.getItem(JSON.stringify(param.id)));
      console.log("selected", bookedSeat);
      setModalVisible(true);
    }
  };
  useEffect(() => {
    if (localStorage.getItem(JSON.stringify(param.id)) !== null) {
      setBookedSeat(localStorage.getItem(JSON.stringify(param.id)));
    }
  }, [param.id]);
  return (
    <BookingStyles style={bgClick ? bgColor : bgDisplay}>
      <VectorImg src={vector} alt="screen" />
      <BookingTableSeats>
        <thead>
          <tr>
            <th> </th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>7</th>
            <th>8</th>
            <th>9</th>
            <th>10</th>
          </tr>
        </thead>
        <tbody>
          {data.id.map((id) => {
            return (
              <React.Fragment key={id}>
                <tr>
                  <SeatRow>{id}</SeatRow>
                  {data.seats.map((_, index) => {
                    return (
                      <React.Fragment key={index}>
                        <td
                          key={id + index}
                        >

                          {(() => {
                            switch (true) {
                              case bookedSeat !== null &&
                                bookedSeat.includes(id + (index + 1)):
                                return <SeatIcon colorName="#626262" />
                              case selectedSeats.includes(id + (index + 1)):
                                return (
                                  <SeatIcon
                                    colorName="#724FD8"
                                    onClick={() => handleSeats(id + (index + 1))}
                                  />
                                );
                              default:
                                return (
                                  <SeatIcon
                                    colorName="#DADADA"
                                    onClick={() => handleSeats(id + (index + 1))}
                                  />
                                );
                            }
                          })()}
                        </td>
                      </React.Fragment>
                    );
                  })}
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </BookingTableSeats>
      <ConfirmButton onClick={modalHandle}>Confirm Booking</ConfirmButton>
      <article
        style={bgClick ? { pointerEvents: "none" } : { pointerEvents: "auto" }}
      >
        {modalVisible && (
          <Modal
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
            setModalVisible={setModalVisible}
            setBgClick={setBgClick}
          />
        )}
      </article>
    </BookingStyles>
  );
};

export default BookingSeats;
