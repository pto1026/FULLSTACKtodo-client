import React, {useState} from 'react'
import Navbar from "../components/Navbar/Navbar";

const Create = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')
    const [priority, setPriority] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const todo = {
            title,
            description,
            status,
            priority,
        }
        await fetch('http://localhost:5000/api/todos', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: todo
        })

        setTitle('')
        setDescription('')
        setStatus('')
        setPriority('')
    }

    return (
        <div>
            <Navbar/>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for='title'>Title: </label>
                    <input type="text" name='title' value={title} onChange={({target}) => setTitle(target.value)}/>
                </div>
                <div>
                    <label for='description'>Description: </label>
                    <input type="text" name='description' value={description} onChange={({target}) => setDescription(target.value)} />
                </div>
                <div>
                    <label for='status'>Status: </label>
                    ###
                </div>
            </form>
        </div>
    )
}

export default Create
