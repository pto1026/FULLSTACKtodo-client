import React, {useEffect} from 'react'
import './App.css'

const App = () => {
    useEffect(() => {
        document.title = 'Todoly | The Todo App'
    })
    return (
        <div className='page-container'>
            <div className='inner-container'>
            </div>
        </div>
    )
}

export default App