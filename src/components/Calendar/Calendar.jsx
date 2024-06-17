import React, { useState } from 'react';
import './calendar.css'; // You can create this file for styling

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendar = ({ onDateSelect, highlightDates = [] }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const startDay = startOfMonth.getDay();
  const totalDays = endOfMonth.getDate();

  const days = [];

  // Calculate the number of days in the previous month
  const previousMonthEnd = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
  const previousMonthDays = previousMonthEnd.getDate();

  // Days from previous month
  for (let i = startDay - 1; i >= 0; i--) {
    days.push(
      <div key={`prev-${i}`} className="calendar-day prev-month">
        {previousMonthDays - i}
      </div>
    );
  }

  // Days of current month
  for (let day = 1; day <= totalDays; day++) {
    const dayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const isSelected = selectedDate && dayDate.toDateString() === selectedDate.toDateString();
    const isHighlighted = highlightDates.some(
      date => dayDate.toDateString() === date.toDateString()
    );
    days.push(
      <div
        key={day}
        className={`calendar-day ${isSelected ? 'selected' : ''} ${isHighlighted ? 'highlighted' : ''}`}
        onClick={() => handleDateClick(dayDate)}
      >
        {day}
      </div>
    );
  }

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePreviousMonth}>&lt;</button>
        <h2>{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</h2>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="calendar-days-of-week">
        {daysOfWeek.map(day => <div key={day} className="calendar-day-of-week">{day}</div>)}
      </div>
      <div className="calendar-days">
        {days}
      </div>
    </div>
  );
};

export default Calendar;