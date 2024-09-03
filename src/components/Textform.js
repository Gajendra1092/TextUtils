import React, {useState} from 'react'

export default function Textform(props) {


  function handleOnChange(event){
    clear();
    setText(event.target.value);
    
  }

  function toLowercase(){
       let val = text.toLowerCase();
       setText(val);
       props.showAlert("Converted to Lowercase!", "success");
  }

  function toUppercase(){
    let val = text.toUpperCase();
    setText(val);
    props.showAlert("Converted to Uppercase!", "success");
  }

  function clear(){
    setText("");
    // props.showAlert("Cleared", "success");
  }

  function copy(){
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  }

  function removeExtraSpaces(){
     let newText = text.split(/[ ]+/);
     setText(newText.join(" "));
     props.showAlert("Extra spaces removed!", "success");
  }
  
  function CapitaliseFirstLetter(){

    setText(text.replace(/(^\w|\.\s*\w)/g, (match) => match.toUpperCase()));
    props.showAlert("capitalized!", "success");
  }

  function countWords(text) {
    if(text === ""){
      return 0;
    }
    else
    {const wordsArray = text.trim().split(/\s+/);
    return wordsArray.length;}
  }

  function countChar(text){
    if(countWords(text) <= 0){
      return 0;
    }
    else{
      const trimmedText = text.trim();
      return trimmedText.length - countWords(text)+1;
    }
   
  }

  let [text, setText] = useState("");
  return (
   <>
  <div class="mb-3 my-3">
  <label for="exampleFormControlTextarea1" class="form-label" style={{backgroundColor: props.mode === "light"?"dark":"light", color: props.mode === "dark"?"white":"black"}}><h3>Textarea</h3>
    </label>
  <textarea class="form-control" placeholder = {props.placeholder} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

    <button type="button" class="btn btn-primary m-1" onClick = {toLowercase}>Convert to lowercase</button>
    <button type="button" class="btn btn-primary m-1" onClick = {toUppercase}>Convert to uppercase</button>
    <button type="button" class="btn btn-primary m-1" onClick = {copy}>Copy to clipboard</button>
    <button type="button" class="btn btn-primary m-1" onClick = {removeExtraSpaces}>Remove extra spaces</button>
    <button type="button" class="btn btn-primary m-1" onClick = {CapitaliseFirstLetter}>Capitalize first letter</button>
    <button type="button" class="btn btn-danger m-1" onClick = {clear}>Clear</button>
    


    <div className="container my-3" style={{backgroundColor: props.mode === "light"?"dark":"light", color: props.mode === "dark"?"white":"black"}}>
         <h4>Your text summmary</h4>
         <p>{countWords(text)} Words, {countChar(text)} Characters</p>
         <p>{0.008 * countWords(text)} Minutes Read</p>
         <h3>Preview</h3>
         {text.length>0?text:"Write something to preview"}
    </div>
   </>
  )
}
