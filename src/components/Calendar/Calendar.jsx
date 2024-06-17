import React, { useState } from 'react';
import './calendar.css';  

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const Calendar = ({ onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const startDay = startOfMonth.getDay();
  const totalDays = endOfMonth.getDate();

  const days = [];
  for (let i = 0; i < startDay; i++) {
    days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
  }
  for (let day = 1; day <= totalDays; day++) {
    const dayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    days.push(
      <div
        key={day}
        className={`calendar-day ${selectedDate && dayDate.toDateString() === selectedDate.toDateString() ? 'selected' : ''}`}
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
    onDateSelect(date);
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