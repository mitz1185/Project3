import React, { useReducer } from 'react'
function reducer(state,action){
return state+action;
}
const UR1 = () => {
const [state,dispatch]=useReducer(reducer ,20);
return (
<div align="center">
<h1 align="center">{state}</h1>
<button onClick={()=>dispatch(5)}>Add</button>
</div>
)
}
export default UR1