import { useState } from 'react'
import './App.css'
import Todo from './componentes/Todo'
import FormTodo from './componentes/FormTodo'
import Busca from './componentes/Busca'

function App() {
const [todo, setTodo] = useState([
  {
    id:1,
    title: "Titulo",
    name: "Programacao",
    description: "belo livro",
    value: "Estudos",
    isCompleted: false
  },
  {
    id:2,
    title: "teste",
    name:"carro",
    description: "belo carro",
    value: "lazer",
    isCompleted: false,
  },
])

  const [search, setSearch] = useState("")

  const  addTodo = (title, name, description, value ) => {
    const newTodos = [
      ...todo,
      {
        id: Math.floor(Math.random( ) * 10000),
        title,
        name,
        description,
        value,
      },
    ];

    setTodo(newTodos);
  }

  const removeTodos = (id) => {
    const newTodo = [...todo];
    const filterTodo = newTodo.filter(todo => todo.id !== id ? todo : null)

    setTodo(filterTodo);
  }

  const completeTodo = (id) => {
    const newTodo = [...todo]
    newTodo.map((todu) => todu.id === id ? todu.isCompleted = !todu.isCompleted : todu)

    setTodo(newTodo)
  }

  return (
   <div className='app'>
    <h1>Adicione seu livro!!</h1>
      <div className='todo-list'>
      <FormTodo addTodo={addTodo}/>
      <Busca search={search} setSearch={setSearch}/>
          {todo.filter((todu) => todu.title.toLowerCase().includes(search.toLowerCase())).map((todu) => (
              <Todo key={todu.id} todu={todu} removeTodos={removeTodos} completeTodo={completeTodo}/>
          ))}
      </div>
   </div>
  )
}

export default App
