// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';

// import {
// BrowserRouter as Router,
// Routes,
// Route,
// link
// } from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been Enabled", "primary");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("light Mode has been Enabled", "Success");

    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TEXTUTILS" mode={mode} toggleMode={toggleMode} aboutText="about"/>
      <Alert alert={alert} />
      <div className="container">
     {/* <Routes>

        <Route exact path="/about" element={<About/>}/> */}
        {/* <Route exact path="/" element = {}/>      */}

        <TextForm showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode}/>

        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
