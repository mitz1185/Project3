import React, { useContext } from "react"
import { Fname,Lname } from "./PC"
function C2(){
const fn = useContext(Fname)
const ln = useContext(Lname)
return (
<h1>Welcome {fn} {ln}</h1>
)
}
export default C2