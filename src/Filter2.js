import React from 'react'
const Filter2 = () => {
let students = [
{ id: "001", name: "Ankita", Branch: "CE" },
{ id: "002", name: "Nidhi", Branch: "CE" },
{ id: "003", name: "Foram", Branch: "CSE" },
{ id: "004", name: "Pooja", Branch: "CSE" },
{ id: "005", name: "Priyanka", Branch: "IT" }
]
const CSE = students.filter((student)=> 
{

         return student.Branch !== "CSE"

}).map((student)=>
{
    return student.name;
}
)
let arr1=CSE.join(",");
return(
    <div>
    {arr1}
    </div>
   
)
}

export default Filter2;