import React, {useEffect, useState} from 'react'
import axios from "axios"

const siteURL ="https://official-joke-api.appspot.com/random_joke"
function RandomJoke(){
const [joke,setJoke] = useState("");
useEffect(() => {
    fetchJoke()
}) 
// //to auto fetch joke use useEffect
 function fetchJoke (){
    axios
    .get(siteURL)
    .then((response) => {
        const{setup,punchline}=response.data;
        setJoke(`${setup} ${punchline}`);
        })
    .catch((error)=>{
        console.error(error);
        });
    };
return (
    <div>
        <h1>Random Joke Generator</h1>
         <p>{joke}</p>
        {/* <button onClick={fetchJoke}>Get Another Joke</button>    
*on button Joke will change without useEffect */}
    </div>
  ) }
export default RandomJoke
