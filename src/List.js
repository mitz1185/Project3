import React from "react";
function List() {
const students = [
{id: 1, name: 'ABC'},
{id: 2, name: 'XYZ'},
{id: 3, name: 'PQR'}
];
return(
<ul type='none'>
{
students.map((student) =>
{
return <li >{student.name}</li>
})
}
</ul>
)
}
export default List