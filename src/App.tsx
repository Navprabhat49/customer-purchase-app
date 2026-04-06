import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Report from './components/Report';
import Navbar from './components/Navbar';
import { ReportProvider } from './hooks/ReportContext';

function App() {

  return (
    <ReportProvider>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/reports" element={<Report/>} />
    </Routes>
    </BrowserRouter>
    </ReportProvider>
  )
}

export default App
