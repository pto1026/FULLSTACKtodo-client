import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Create from './Create/Create'
import Edit from './Edit/Edit'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles.css'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='create' element={<Create />} />
                <Route path='edit/:id' element={<Edit />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.querySelector('#root')
)