import React, {useEffect} from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'

const App = () => {
    useEffect(() => {
        document.title = 'Todoly | The Todo App'
    })
    return (
        <div className='page-container'>
           <Navbar />
        </div>
    )
}

export default App