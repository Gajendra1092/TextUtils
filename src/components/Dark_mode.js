import React, { useState } from "react";

export default function Dark_mode() {

  function change() {
    const toggleSwitch = document.getElementById("flexSwitchCheckDefault");
    const isOn = toggleSwitch.checked;
    if(isOn === true){
      setMyStyle({
        backgroundColor: 'black',
        color: 'white'
    });
    }
    else{
      setMyStyle({
        backgroundColor: 'red',
        color: 'white'
    });
    }
    
}


  let [mystyle, setMyStyle] = useState({
        backgroundColor: 'red',
        color:'white'
  });
  return (
    <>
  
    </>
  );
}
