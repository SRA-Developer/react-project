
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import BlinkText from './components/BlinkText';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  const toggleMode = ()=>{
   if(mode === 'light'){
    setMode ('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled", "success");
    document.title = 'TextUtils - Dark Mode';
    // setInterval(() =>{
    //   document.title = 'TextUtils is Anazing Mode';

    // }, 2000);
    // setInterval(() =>{
    //   document.title = 'Install TextUtils Now';

    // }, 1500);
   }
   else{
    setMode ('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled", "success");
    document.title = 'TextUtils - Light Mode';
  }

 }
  return (
    <>
    <Router>
        <Navbar title="SRA" aboutTitle="About us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert}/>
        {/* <BlinkText/> */}
        {/* <BlinkText mode={mode} intervalTime={2000} /> Pass mode prop here  */}
        <div className="container my-3">
           {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          {/* <Route path="/about">
            <About />
          </Route> */}
          <Route exact path="/about" element={<About mode={mode}/>} />  {/* Use element prop instead of component */}
          {/* <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          </Route> */}
          <Route path="/home" element={
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            } />
        </Routes>
       </div>
       </Router>
    </>
  );
}

export default App;