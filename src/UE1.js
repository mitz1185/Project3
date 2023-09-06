import React, {useState,useEffect } from 'react'
const UE1 = () => {
const[count,setcount]=useState(0);
const[calculation,setcal]=useState(0);
//Triggered every time when Button A(count) clicked.
useEffect(()=>
{
alert("Clicked")
},[]);
//Triggered only once when the page is rendered
//useEffect(()=>
//{
//alert("Clicked")
//},[]);
const changeCount=()=>{
setcount(count+1);
}
const changeCalc=()=>{
setcal(calculation+1);
}
return (
<div>
<button onClick={changeCount}>Button A {count}</button><br/>
<button onClick={changeCalc}>Button B {calculation}</button>
</div>
) }
export default UE1