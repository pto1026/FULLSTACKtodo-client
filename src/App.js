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

    const deleteTodo = async (id) => {
        await fetch(`http://localhost:5000/api/todos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    return (
        <div className="page-container">
            <Navbar/>
            <div>
                <ul>
                    {todos.map(todo => {
                        return (
                            <li className='container' key={todo._id}>{todo.title}<br />{todo.status}<br />{todo.priority}
                                <br /> <button className='delete-button' onClick={() => deleteTodo(todo._id)}>Delete</button>
                                <br /> <Link className='link' to={`edit/${todo._id}`}>
                                    Edit
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
