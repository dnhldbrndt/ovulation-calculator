import logo from './logo.svg';
import './App.css';
import Calendar from 'react-calendar'
import "./assets/calendar-style.css";
import Input from "./components/Input" 
import Calculator from "./components/Calculator" 
import CalendarView from "./components/CalendarView"
function App() {
  return (
    <div className="App">
		<h1>Ovulation Calculator </h1>
		<div className="page-section">  
		<Calculator />
 </div>
    </div>
  );
}

export default App;
