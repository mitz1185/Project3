import React, { useReducer } from 'react';

function UR() {
    const initialstate = 0;
const [state, dispatch] = useReducer(reducer, initialstate);

function reducer(state,action){
if(action.type==='increment'){
return state+1;
}
}
return (
<button onClick={()=> dispatch({type:"increment"})}>
Click me ({state})
</button>
);
}
export default UR