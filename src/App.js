import logo from './logo.svg';
import './App.css';
import Calendar from 'react-calendar'
import "./assets/calendar-style.css";
import Input from "./components/Input" 
import CalendarView from "./components/CalendarView"
function App() {
  return (
    <div className="App">
		<h1>Ovulation Calculator </h1>
		<div className="page-section">  
		<CalendarView className="calendar-theme" /></div>
		<Input />
    </div>
  );
}

export default App;
