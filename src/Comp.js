import React,{ useContext} from "react";
import { Fname } from "./Main1";
function Comp()
{

     const value=useContext(Fname);
     return<span>{value}</span>
}
export default Comp