import React, {useEffect} from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'

const App = () => {
    useEffect(() => {
        document.title = 'Todoly | The Todo App'
        const retrievePosts = async () => {
            const response = await fetch('http://localhost:5000/api/todos')
            const data = await response.json()

            return data;
        }

        retrievePosts()
    }, [])
    return (
        <div className='page-container'>
           <Navbar />
        </div>
    )
}

export default App
