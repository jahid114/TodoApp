import React from 'react'
import style from './todo.module.css'

const Todo = (props) => {
    const {title, desc} = props.tododetails;
    const handleDelete = (id) => {
        props.onDeleteTodo(id);
    }
  return (
    <article className={style.todo}>
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
        <div>
            <button className= {style.btn} onClick={()=>(handleDelete(props.id))}>
                <i className='fa fa-trash fa-2x'></i>
            </button>
        </div>
    </article>
  )
}

export default Todo