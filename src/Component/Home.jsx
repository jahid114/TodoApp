import React,{useState} from 'react'
import Todo from './Todo'
import style from './home.module.css'
import NewTodo from './NewTodo'
import {v4 as uuidv4} from 'uuid';

const Home = () => {
    const [todos,setTodos] = useState([]);
    const handleNewTdo = (todo) =>{
        setTodos((oldtodos) => {
            return [...oldtodos,{id:uuidv4(), todo}];
        })
    }
    const handleDeleteTodo = (id) => {
        const filteredtodo = todos.filter((todo)=>{
            return todo.id !== id;
        })
        setTodos(filteredtodo);
    }
  return (
    <div className={style.container}>
        <h1>Todo App</h1>
        <NewTodo onAddingTodo={handleNewTdo}/>
        <section className={style.todos}>
        {
            todos.map((todo)=>(
                <Todo tododetails={todo.todo} key={todo.id} id={todo.id} onDeleteTodo={handleDeleteTodo}/>
            ))
        }
        </section>
    </div>  
  )
}

export default Home