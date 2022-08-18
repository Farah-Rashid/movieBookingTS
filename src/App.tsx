import React from 'react';
import HomePage from './components/HomePage';
import { Routes, Route } from "react-router-dom"
import BookingSeats from './components/BookingSeats';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="book/:id/:title" element={<BookingSeats />} />
      </Routes>
    </>
  );
}

export default App;
