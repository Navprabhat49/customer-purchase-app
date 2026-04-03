import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Report from './components/Report';
import Navbar from './components/Navbar';

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/reports" element={<Report/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
