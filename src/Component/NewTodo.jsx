import React,{useState} from 'react'
import style from './newtodo.module.css'

const NewTodo = (props) => {
  const[todo, setTodo] = useState({title:'',desc:''})

  const handleSubmit = (e) => {
    e.preventDefault();
    if(todo.title.length!==0 && todo.desc.length!==0){
      props.onAddingTodo(todo);
    }
    setTodo({title:"",desc:""});
  }

  const handleChange = (e) =>{
    const name = e.target.name;
    setTodo((oldTodo) =>{
      return {...oldTodo,[name]:e.target.value}
    })
  }

  return (
    <form onSubmit={handleSubmit}>
        <div className={style.form_field}>
            <label htmlFor='title'>Title: </label>
            <input type='text' id='title' name='title' value={todo.title} onChange={handleChange}/>
        </div>
        <div className={style.form_field}>
            <label htmlFor='title'>Description: </label>
            <textarea id='desc' name='desc' value={todo.desc} onChange={handleChange}/>
        </div>
        <button type='submit'>ADD Todo</button>
    </form>
  )
}

export default NewTodo