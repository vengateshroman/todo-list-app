
import { useState } from "react";
import "./App.css";

function App() {
  
  const [todo,settodo] = useState("");
  const [todos,settodos] = useState([]);
  const [editId,seteditId]= useState(0);

  const handlechange=(e)=>
  {
    e.preventDefault();

    if(editId){
     const edittodo=todos.find((i)=>i.id === editId);
     const updatedtodos=todos.map((t)=>
     t.id === edittodo.id
      ? (t = { id: t.id, todo })
      : { id: t.id, todo: t.todo}
     );
     settodos(updatedtodos);
     seteditId(0);
     settodo("");
     return;
    }
     
    if(todo !==""){
     settodos([{id:`${todo}-${Date.now()}` , todo} , ...todos]) 
     settodo("");
    }
  };

  const handleDelete=(id)=>{
    const Deltodo=todos.filter((to)=>to.id !== id)
    settodos([...Deltodo]);
  };

  const handleEdit=(id)=>
  {
    const edittodo=todos.find((i)=>i.id === id);
    settodo(edittodo.todo);
    seteditId(id);
  }
  
  return (
   
      <div className="App"> 
      <div className="Container">
        <h1>Todo List App</h1>
       <form className="todoform" onSubmit={handlechange} >
        <input type="text" value={todo} onChange={(e)=>settodo(e.target.value)} />
        <button type="submit">{editId?"Edit":"Go"}</button>
       </form>
       <ul className="alltodo">
        {
          todos.map((t)=>(
            <li className="singletodo">
            <span className="todotext" key={t.id}>{t.todo}</span>
            <button onClick={()=>handleEdit(t.id)} >Edit</button>
          <button onClick={()=>handleDelete(t.id)}>Delete</button>
             </li>
          ))
        }
       
        
       </ul>
      </div> 
      </div>
  );
}

export default App;
