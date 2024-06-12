import React, { useState, useEffect } from 'react';
import "../assets/style.css";
import Calendar from 'react-calendar'

// Array of month names
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
 
 
const CalendarView = () => {
  const [date, setDate] = useState(new Date());

  const onChange = newDate => {
    setDate(newDate);
  };

return(
  <div>
<Calendar
        onChange={onChange}
        value={date}
        // Optionally, you can include more props to customize the calendar
        // e.g., minDate, maxDate, tileClassName, etc.
      />
      <p className="selected-date">
        Selected Date: {date.toDateString()}
      </p>
	
  </div>
)
}

export default CalendarView