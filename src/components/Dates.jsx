import React from 'react';
import Cal from './Calendar/Calendar';
import "../assets/style.css";
import "../assets/calendar-style.css";

const Dates = ({ fertileWindow }) => {
  const getHighlightDates = () => {
    if (!fertileWindow) return [];
    const { start, end } = fertileWindow;
    const dates = [];
    let currentDate = new Date(start);
    while (currentDate <= end) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const highlightDates = getHighlightDates();

  return (
    <div>
      <h2>Fertile Window Calendar</h2>
      <Cal highlightDates={highlightDates} />
    </div>
  );
};

export default Dates;