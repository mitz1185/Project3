import React, { useState } from 'react';
function US3() {
    	const [style,setstyle]=useState("red");
    	function TextChange(){
              		 setstyle("green")
              			}
  return (
    <div>
<button onClick={TextChange}>Change Text Color</button>
<h1 style={{backgroundColor:style}}>useState in CSS</h1>
    </div>
  ) }
export default US3
