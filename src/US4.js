import React, { useState } from 'react';
import img1 from "./smily.png";
import img2 from "./spider.png";
function US4() {
         const [pic,setpic]=useState(img1);
         function ImageChange(){
          				  setpic(img2)
         				}
return (
  		  <div>
    	 		<img src={pic} heigth="200px" width="200px" alt="logo" />
     	 		<button onClick={ImageChange}>Change Image</button>
    		</div>
 		 ) }
export default US4
