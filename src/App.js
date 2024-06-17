import logo from './logo.svg' 
import { Routes, Route } from "react-router-dom" 
import Calendar from 'react-calendar'
import Input from "./components/Input" 
import Calculator from "./components/Calculator" 
import CalendarView from "./components/CalendarView"
import MenstrualCycle from './components/MenstrualCycle' 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Calculator/>} />
      <Route path="/cycle" element={<MenstrualCycle/>} />
    </Routes>
  );
}

export default App;
