import React, {useEffect} from 'react'

const App = () => {
    useEffect(() => {
        document.title = 'Todoly | The Todo App'
    })
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

export default App