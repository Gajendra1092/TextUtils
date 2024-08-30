import React ,{ useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {

  const [mode, setMode] = useState('light');
  function toggle(){
     if(mode === 'light'){
         setMode("dark");
         document.body.style.backgroundColor= "black";
         showAlert("Dark mode has been enabled", "success");
     }
     else{
        setMode("light");
        document.body.style.backgroundColor= "white";
        showAlert("Light mode has been enabled", "primary");
     }
  }
  // const [clicks, setClicks] = useState(0);
  const [alert,setAlert] = useState(null);
  function showAlert(message,type){
          // setClicks(clicks+1);
          setAlert({
            msg:message,
            type:type
          })
            setTimeout(() => {
              setAlert(null);
              // setClicks(clicks-1);
            }, 1500);

          
          
  }

  
  return (
    <BrowserRouter>

    <Navbar title="TextUtils" toggle={toggle} mode={mode}></Navbar>
    <Alert alert={alert} ></Alert>
    <div className="container">
      <Routes>
    <Route path="/" element={<Textform placeholder = "Enter your text" mode={mode} showAlert={showAlert}></Textform>} /> 
    </Routes>
    </div>
    {/* <Dark_mode></Dark_mode> */}
    <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
    </Routes>

     </BrowserRouter>
  
  );
}

export default App;
