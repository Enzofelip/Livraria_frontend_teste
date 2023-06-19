import { useState } from "react"

const Todo = ({todu, removeTodos, completeTodo}) => {

    const [estado, setEstado] = useState(false)

    const handleEstado = () => {
      if(estado){
        setEstado(false)
      }else{
        setEstado(true)
      }

    }

    return(
        <div className='todo' style={{textDecoration: todu.isCompleted ? "line-through" : ''}}>
        <div className='content'>
            <h2>{todu.title}</h2>
            <p>Autor: <span>{todu.name}</span></p>
            {estado &&(
              <div>
                <p>Descrição: <span style={{color: "red"}}>{todu.description}</span></p>
                <p>Categoria: <span style={{color: "red"}}>({todu.value})</span></p>
              </div>
            )}
            <button onClick={handleEstado}>Ver mais</button>  
        </div>
        <div>
          <button className="complete" onClick={(e) => completeTodo(todu.id)}>+</button>
          <button className="remove" onClick={(e) => removeTodos(todu.id)}>x</button>
        </div>
      </div>
    )
}

export default Todo