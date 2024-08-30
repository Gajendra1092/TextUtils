import React from 'react'

function About(props) {
  return (
    <div>
      <div className="container my-4" style={{color:props.mode === "light"?"black":"white"}}>
        <h4>This is a website which provides text utilities for you. Made with React and Bootstrap.</h4>
        <h4>Thanks!! for using this website.</h4>

      </div>
    </div>
  )
}

export default About
