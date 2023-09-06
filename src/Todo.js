import React,{useState} from 'react'

const Todo=() => {
    const[Task, setTask]= useState("");
    const[Todolist, setTodoList]=useState([]);
    function handleChange(event) {
        setTask(event.target.value);
    }
    function addTask(event) {
        setTodoList([...Todolist,Task]);
    };
                              
    return (
    <div>
    <h1> Enter Task </h1>
    <input  onChange={handleChange}/>   
        <button  onClick={addTask}> Add Task </button>
        {
            Todolist.map((val)=>
            {
                return <h1>{val}</h1>
            })
        }
       
    </div>
  );
}
export default Todo
