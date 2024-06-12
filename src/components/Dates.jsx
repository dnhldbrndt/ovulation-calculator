import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import "../assets/style.css";
import "../assets/calendar-style.css";
 
const Dates = ({ fertileWindow }) => {
  const tileClassName = ({ date, view }) => {
    if (view === 'month' && fertileWindow) {
      const { start, end } = fertileWindow;
      if (date >= start && date <= end) {
        return 'fertile-window';
      }
    }
    return null;
  };

  return (
    <div>
      <h2>Fertile Window Calendar</h2>
      <Calendar
        tileClassName={tileClassName}
      />
    </div>
  );
}

export default Dates;