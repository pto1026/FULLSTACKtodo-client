import React, {useEffect, useState} from 'react'
import Navbar from "../components/Navbar/Navbar"
import './Create.css'

const Create = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('Pending')
    const [priority, setPriority] = useState('Low')

    useEffect(() => {
        document.title = 'Todoly | Create a Todo'
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const todo = {
            title,
            description,
            status,
            priority
        }
        const posted = await fetch('http://localhost:5000/api/todos', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todo)
        })

        console.log(posted)

        setTitle('')
        setDescription('')
        setStatus('Pending')
        setPriority('Low')
    }

    return (
        <div className="container">
            <Navbar/>
            <div className="main-container">
                <form onSubmit={handleSubmit} className="form-container">
                    <div className="form-element">
                        <label htmlFor="title">Title: </label>
                        <input type="text" name="title" id="title" value={title}
                               onChange={({target}) => setTitle(target.value)}/>
                    </div>
                    <div className="form-element">
                        <label htmlFor="description">Description: </label>
                        <input type="text" id="description" name="description" value={description}
                               onChange={({target}) => setDescription(target.value)}/>
                    </div>
                    <div className="form-element">
                        <p>
                            Status:
                        </p>
                        <div className="status">
                            <div className="grouping">
                                <input type="radio" id="statusChoice1"
                                       name="status" value="Pending" checked={status === 'Pending'}
                                       onChange={({target}) => setStatus(target.value)}/>
                                <label htmlFor="statusChoice1">Pending</label>
                            </div>
                            <div className="grouping">
                                <input type="radio" id="statusChoice2"
                                       name="status" value="In Progress" checked={status === 'In Progress'}
                                       onChange={({target}) => setStatus(target.value)}/>
                                <label htmlFor="statusChoice2">In Progress</label>
                            </div>
                            <div className="grouping">
                                <input type="radio" id="statusChoice3"
                                       name="status" value="Complete" checked={status === 'Complete'}
                                       onChange={({target}) => setStatus(target.value)}/>
                                <label htmlFor="statusChoice3">Complete</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-element">
                        <p>
                            Priority:
                        </p>
                        <div className="priority">
                            <div className="grouping">
                                <input type="radio" id="priority1"
                                       name="priority" value="Low" checked={priority === 'Low'}
                                       onChange={({target}) => setPriority(target.value)}/>
                                <label htmlFor="priority1">Low</label>
                            </div>
                            <div className="grouping">
                                <input type="radio" id="priority2"
                                       name="priority" value="Med" checked={priority === 'Med'}
                                       onChange={({target}) => setPriority(target.value)}/>
                                <label htmlFor="priority2">Med</label>
                            </div>
                            <div className="grouping">
                                <input type="radio" id="priority3"
                                       name="priority" value="High" checked={priority === 'High'}
                                       onChange={({target}) => setPriority(target.value)}/>
                                <label htmlFor="priority3">High</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-element">
                        <button type="submit" className="submit-button">Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Create
