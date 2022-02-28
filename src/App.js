import React, {useEffect, useState} from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {Link} from 'react-router-dom'

const App = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        document.title = 'Todoly | The Todo App'
        const retrievePosts = async () => {
            const response = await fetch('http://localhost:5000/api/todos')
            const data = await response.json()

            setTodos(data)
        }

        retrievePosts()
    }, [todos])
    return (
        <div className="page-container">
            <Navbar/>
            <div>
                <ul>
                    {todos.map(todo => {
                        return (
                            <li key={todo._id}>{todo.title}<br />{todo.status}<br />{todo.priority}
                                <br /> <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                                <br /> <Link to={{pathname: `/edit/${todo._id}`}}>
                                    <a>Edit</a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default App
