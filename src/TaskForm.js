
import { useState } from "react";


export default function TaskForm({onAdd}){
    const [taskName,setTaskName] = useState('');
    function handleSumbit(ev){
        ev.preventDefault();
        onAdd(taskName);
        setTaskName('');
    }
    return(
        <form onSubmit={handleSumbit}>
        <button>+</button>
        <input  type="text" 
                value={taskName} 
                onChange={ev => setTaskName(ev.target.value)}
                placeholder="Your next task..."/>
        </form>
    )
}