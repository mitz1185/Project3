import React,{useState} from 'react'
const US7 =() =>{  

const[buttontext,setButtontext]= useState("show the value")
const[text,setText]= useState("")
function showhide() {
    if(buttontext==="show the value")
      {
        setButtontext("hide");
        setText("Hello");
      }
      else{
        setButtontext("show the value");
        setText("");      
    } }
  return (
    <div>
   <button onClick = {showhide}> {buttontext}</button> 
   {text}    
   </div>
  ) }
   export default US7;
