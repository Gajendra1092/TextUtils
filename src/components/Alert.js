import React from 'react'

function Alert(props) {

//   function CapitaliseFirstLetter(text){
//     const lower = text.toLowerCase();
//     return lower.charAt(0).toUpperCase() + lower.slice(1);
//   }
  
  return (
  <div style = {{height:50px}}>
{props.alert && <div className= {`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>Success :</strong> {props.alert.msg}}
  </div>

  )
}

export default Alert
