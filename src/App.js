import React ,{ useState } from 'react';
import Dark_mode from './components/Dark_mode';
import Navbar from './components/Navbar';
import Textform from './components/Textform';


function App() {

  const [mode, setMode] = useState('light');
  function toggle(){
     if(mode === 'light'){
         setMode("dark");
         document.body.style.backgroundColor= "black";
     }
     else{
        setMode("light");
        document.body.style.backgroundColor= "white";
     }
  }

  return (
    <>
    <Navbar title="TextUtils" toggle={toggle} mode={mode}></Navbar>
    <div className="container">
      <Textform placeholder = "Enter your text" mode={mode}></Textform>
    </div>
    {/* <Dark_mode></Dark_mode> */}

    </>
  );
}

export default App;
