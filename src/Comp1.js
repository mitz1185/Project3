import React, { createContext } from "react"
import Comp2 from "./Comp2"
const Num1 = createContext();
const Num2 = createContext();
function Comp1(){
return (
<>
<Num1.Provider value="20">
<Num2.Provider value="5">
    <Comp2/>
</Num2.Provider>
</Num1.Provider>
</>
)
}
export default Comp1
export {Num1,Num2}