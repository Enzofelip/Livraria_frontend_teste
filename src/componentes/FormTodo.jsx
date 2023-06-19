import "./FormTodo.css"
import { useState } from "react"

const FormTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");

   

    const handleSubmit = (e) => {
        e.preventDefault()

       if(!title || !name || !description || !value){
            return
       }

        addTodo(title, name, description, value)

        setTitle('')
        setName('')
        setDescription('')
        setValue('')
    }

    return(
        <div className="todo-form">
            <h2>Criar tarefa: </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite o titulo" onChange={(e) => setTitle(e.target.value)} value={title}/>
                <input type="text" placeholder="Digite o nome do autor" onChange={(e) => setName(e.target.value)} value={name}/>
                <input type="text" placeholder="Deixe uma descrição" onChange={(e) => setDescription(e.target.value)} value={description}/>
                <select onChange={(e) => setValue(e.target.value)} value={value}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Lazer">Lazer</option>
                    <option value="Estudos">Estudos</option>
                    <option></option>
                </select>
                <button type="submit">Criar tarefa</button>
            </form>
        </div>
    )
}

export default FormTodo