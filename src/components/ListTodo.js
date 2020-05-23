import React, { useState, useEffect } from 'react';
import EditTodo from './EditTodo';

const ListTodo = () => {

    const URL_API = 'http://localhost:5000/todo/';
    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        const response = await fetch(URL_API);
        const data = await response.json();
        
        setTodos(data.data);
    };

    const handleDelete = async (id) => {
        const response = await fetch(`${URL_API}/${id}`, {
            method : 'DELETE'
        });

        setTodos(todos.filter(todo => todo.id !== id));
    };

    useEffect(() => {
        getTodos();
    }, []);

    return(
        <>
            <table className="table text-center">
                <thead>
                    <tr>
                    <th scope="col">No</th>
                    <th scope="col">Description</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos && todos.map((todo, index) => (
                            <tr key={todo.id}>
                                <th>{index + 1}</th>
                                <td>{todo.description}</td>
                                <td>
                                    <EditTodo todo={todo} />
                                    <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
};

export default ListTodo;