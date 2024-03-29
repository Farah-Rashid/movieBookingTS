import React, { useEffect, useState } from "react";
import vector from "../Assets/Screen.png";
import { useParams } from "react-router";
import Modal from "./Modal";
import { data } from '../GlobalConstants'
import {
  BookingStyles,
  VectorImg,
  SeatRow,
  BookingTableSeats
} from "../styles/Booking.styled";
import Button from '../components/Button/Button'
import SeatIcon from "../Assets/SeatIcon"

const BookingSeats = () => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [bookedSeat, setBookedSeat] = useState<string | null>("");

  const param = useParams();

  const modalHandle = () => {
    setModalVisible(true);
    switch (true) {
      case selectedSeats.length === 0:
        setModalVisible(false);
        alert(" Please select seats first");
        break;

      case selectedSeats.length > 10:
        setModalVisible(false);
        alert(`you can't select more than 10 seats.. 
      you have selected ${selectedSeats.length} seats.
      Please deselect ${selectedSeats.length - 10} seats`);
        break;
      default:
        localStorage.setItem(
          JSON.stringify(param.id),
          bookedSeat + selectedSeats.toString()
        );
        setBookedSeat(localStorage.getItem(JSON.stringify(param.id)));
        setModalVisible(true);
    }
  };

  const handleSeats = (id: string) => {
    if (selectedSeats.includes(id)) {
      const updatedSeats = selectedSeats.filter((seatId) => seatId !== id);
      setSelectedSeats(updatedSeats);
    } else {
      setSelectedSeats((prevSeats) => [...prevSeats, id]);
    }
  }
  useEffect(() => {
    if (localStorage.getItem(JSON.stringify(param.id)) !== null) {
      setBookedSeat(localStorage.getItem(JSON.stringify(param.id)));
    }
  }, [param.id]);
  return (
    <BookingStyles>
      <VectorImg src={vector} alt="screen" />
      <BookingTableSeats>
        <thead>
          <tr>
            <th> </th>
            {data.seats.map((seatno) => (
              <th data-testid="seatNum" key={seatno}>{seatno}</th>
            ))}
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
      <Button onClick={modalHandle}>Confirm Booking</Button>

      {modalVisible && (
        <Modal
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
          setModalVisible={setModalVisible}
        />
      )}

    </BookingStyles>
  );
};

export default BookingSeats;
