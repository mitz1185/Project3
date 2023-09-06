import React, { createContext } from "react"
import C1 from "./C1"
// To create context for firstname and lastname
const Fname = createContext();
const Lname = createContext();
function PC(){
return (
<>
<Fname.Provider value="ABC"> // to provide the value which should be passed
<Lname.Provider value="XYZ">
<C1/>
</Lname.Provider>
</Fname.Provider>
</>
)
}
export default PC
export {Fname,Lname}