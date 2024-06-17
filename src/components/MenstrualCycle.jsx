import React, { useState } from 'react';
import "../assets/cycle-style.css";  
import Cal from './Calendar/Calendar';
import Header from './Header';
const MenstrualCycle = () => {
  const [periodStartDates, setPeriodStartDates] = useState([]);

  const handleDateChange = (date) => {
    const dateExists = periodStartDates.some(d => d.getTime() === date.getTime());
    const updatedDates = dateExists
      ? periodStartDates.filter(d => d.getTime() !== date.getTime())
      : [...periodStartDates, date].slice(0, 3).sort((a, b) => a - b);

    setPeriodStartDates(updatedDates);
  };

  const calculateAverageCycleLength = () => {
    if (periodStartDates.length < 3) return null;
    const cycleLengths = periodStartDates
      .slice(1)
      .map((date, index) => (date - periodStartDates[index]) / (1000 * 60 * 60 * 24));
    const average = cycleLengths.reduce((acc, length) => acc + length, 0) / cycleLengths.length;
    return Math.round(average);
  };

  const averageCycleLength = calculateAverageCycleLength();

  const highlightDates = periodStartDates;

  return (
    <div>      <Header/><div className="container">
      <h2>Determine Length of Menstrual Cycle</h2>
      <p>To determine your menstrual cycle length, follow these steps:</p>
      <ul>
        <li>Select the first day of your period on the calendar below.</li>
        <li>Continue selecting the first day of your period for two more cycles.</li>
        <li>Click on a selected date on the calendar to remove it.</li>
      </ul>
      <div>
        <h3>Selected Period Start Dates:</h3>
        <ul style={{ listStyleType: "none" }}>
          {periodStartDates.map((date, index) => (
            <li key={index}>
              {date.toLocaleDateString()}
              <button onClick={() => setPeriodStartDates(periodStartDates.filter(d => d !== date))}>X</button>
            </li>
          ))}
        </ul>
      </div>
      <Cal
        onDateSelect={handleDateChange}
        highlightDates={highlightDates}
      />
      {averageCycleLength !== null && (
        <div>
          <h3>Average Cycle Length: {averageCycleLength} days</h3>
        </div>
      )}</div>
    </div>
  );
}

export default MenstrualCycle;