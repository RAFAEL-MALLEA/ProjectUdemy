import imgUno from './assets/images/img-1.jpg';

import MyButton from './components/MyButton';
import WelcomeText from './components/WelcomeText';
import ItemFrut from './components/ItemFrut';
import Formulario from "./components/Formulario.jsx";
import NoControlados from "./components/NoControlados.jsx";
import Cat from "./components/Cat.jsx";

import Todos from './components/Todos.jsx';

 import { useState } from 'react';


const initialStateTodos = [
    {
    id: 1,
    title: "Todo #01",
    description: "Descripción #01",
    state: true,
    priority: true,
    },
    {
    id: 2,
    title: "Todo #02",
    description: "Descripción #02",
    state: false,
    priority: false,
    },
    {
    id: 3,
    title: "Todo #03",
    description: "Descripción #03",
    state: false,
    priority: true,
    },
]



const App = () => {

  const [todos, setTodos] = useState(initialStateTodos);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    const newArray = todos.filter(todo => todo.id !== id)
    setTodos(newArray);
  }

  const updateTodo = (id) => {
    const newArray = todos.map(todo => {
        if (todo.id === id) {
            todo.state = !todo.state;
        }
        return todo;
    })
    setTodos(newArray);
  }













    const title = "Mi titulo desde una constante";
    const classTitle = "text-center";
    // const pathimg = "src/assets/images/img-1.jpg";
    const user = true;

    const fruts = ['🍎','🍊','🍅']


    
    
    return (
        <>
            <h1 className={classTitle}>{title}</h1>
            <img src={imgUno} alt={`imagen-${title}`}/>

            <MyButton text='boton 1'/>
            <MyButton text='boton 2'/>
            <MyButton text='boton 3'/>

            {<WelcomeText users ={user}/>}

            <ul>
                {fruts.map((frut, index) => {
                return  <ItemFrut key={index} frutas={frut}/>
                })}
            </ul>

                <div className="container mb-2">
                    <h1 className='my-5'>Formularios controlados</h1>
                    <Formulario addTodo={addTodo} />
                    <Todos todos={todos} deleteTodo={deleteTodo} uodateTodo={updateTodo}/>
                </div>

                <h1>Formularios no controlados</h1>

                <NoControlados />
    
                


            <Cat />


            
        </>
    );
};


export default App;
