import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Report from './components/Report';
import Navbar from './components/Navbar';
import { ReportProvider } from './hooks/ReportContext';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import Login from './components/Login';

function App() {

  const isAuthenticated = useIsAuthenticated();

  const { inProgress } = useMsal();

  if(inProgress!== "none"){
    return <div className='loading-container'>
      <div className='loader'></div>
      <p>Loading... </p>
    </div>
  }

  return (
    <ReportProvider>
    <BrowserRouter>

    {isAuthenticated && <Navbar /> }

    <Routes>
      {!isAuthenticated ? (
        <Route path="*" element={<Login/>} />
      ) : (
        <>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reports" element={<Report/>} />
        </>
      )}
      
    </Routes>
    </BrowserRouter>
    </ReportProvider>
  );
}

export default App;
