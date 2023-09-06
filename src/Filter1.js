import React from 'react'
const Filter1 = () => {
const people = [
{
name: 'Jimmy',
age: 31,
},
{
name: 'John',
age: 45,
},
{
name: 'Parul',
age: 67,
},
{
name: 'Lovely',
age: 69,
},
{
name: 'Georgea',
age: 34,
}
];
return (
<div>
{people.filter(person => person.age < 60).map(filteredPerson => (
<li>
{filteredPerson.name}
</li>
))}
</div>
)
}
export default Filter1