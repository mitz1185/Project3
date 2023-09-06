import { useState } from "react";
const US2 = () => {
    const [num,setnum]=useState(0)
    function increment(){
        if(num<10){
            setnum(num+1);
        }else{
            return false;
        }
    }
    function decrement(){
        if(num > 0){
            setnum(num-1);
        }else{
            return false;
        }
        }
    return (
        <div>  
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <h1> {num} </h1>
        </div>
    )
}
export default US2
