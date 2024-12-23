import List from '@mui/material/List';
import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { v4 as uuid } from 'uuid';
import { Box } from '@mui/material';
import Sections from './Sections';





const initialData=()=>{
  const data = JSON.parse(localStorage.getItem('todos'));
  return data || []
}

export default function TodoList() {
  const [todos, setTodo] = useState(initialData);
  const [completedTodos, setCompletedTodos] = useState([])

    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos))
    },[todos]);
    


  const removeTodo=(id)=>{
    setTodo(()=>(todos.filter(todo=>todo.id!==id)))
  }

  const handleToggle = (id) =>{
    setTodo((prev)=>{ return prev.map((todo)=>{
      if(todo.id===id){return {...todo,completed:!(todo.completed)}}
      return todo
    
    })});
  };
  const addTodo=(t)=>{
    setTodo((prev)=>([...prev,{id:uuid(),text:t,completed:false}]))
      
  }
  const completed = () => {
    setCompletedTodos( todos.filter(todo => todo.completed)); // Set completed todos
  };
  


  const allTodos=()=>{
    return todos
  }
  return (


    <Box sx={{
      width:"98vw",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>

      <div className='List'>
      <h1 className='Todos'>Todos</h1>
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo) => {
        return(
          <>
          <TodoItem key={todo.id} todo={todo} remove={removeTodo} toggel={handleToggle}/>
          </>
        )
        
      })}
      <Sections completed={completed} allTodos={allTodos}/>
      <h2>Completed Todos</h2>
        {completedTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} remove={removeTodo} toggel={handleToggle} />
        ))}
      </div>
    </Box>
   
  );
}


