import React, { useState } from 'react';
import CalendarView from './CalendarView';
import Cal from "./Calendar/Calendar";
import Input from './Input';
import Dates from './Dates';
import Header from './Header';
import "../assets/calendar-style.css"; 

const Calculator = () => {
  const [lastPeriodDate, setLastPeriodDate] = useState(null);
  const [averageCycleLength, setAverageCycleLength] = useState(28); // Default cycle length
  const [fertileWindow, setFertileWindow] = useState(null);
  const [ovulationDay, setOvulationDay] = useState(null);

  const handleDateChange = (date) => {
    setLastPeriodDate(date);
    calculateOvulation(date, averageCycleLength);
  };

  const handleCycleLengthChange = (e) => {
    const cycleLength = e.target.value;
    setAverageCycleLength(cycleLength);
    if (lastPeriodDate) {
      calculateOvulation(lastPeriodDate, cycleLength);
    }
  };

  const calculateOvulation = (startDate, cycleLength) => {
    const ovulationDate = new Date(startDate);
    ovulationDate.setDate(ovulationDate.getDate() + (cycleLength - 14));
    setOvulationDay(ovulationDate);

    const fertileStartDate = new Date(ovulationDate);
    fertileStartDate.setDate(fertileStartDate.getDate() - 5);
    const fertileEndDate = new Date(ovulationDate);
    fertileEndDate.setDate(fertileEndDate.getDate() + 1);

    setFertileWindow({ start: fertileStartDate, end: fertileEndDate });
  };

  return (
    <div>
      <Header/><div className="container">
      <Cal onDateSelect={handleDateChange} />
      <h2>First Day of Your Last Period</h2>
      {/* Removed CalendarView as it's replaced by Cal */}
      <Input value={averageCycleLength} onChange={handleCycleLengthChange} />
      {ovulationDay && fertileWindow && (
        <div>
          <p>Ovulation Day: {ovulationDay.toDateString()}</p>
          <p>Fertile Window: {fertileWindow.start.toDateString()} - {fertileWindow.end.toDateString()}</p>
          <Dates fertileWindow={fertileWindow} />
        </div>
      )}</div>
    </div>
  );
}

export default Calculator;