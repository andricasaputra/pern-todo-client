import React, { useState } from 'react';

const EditTodo = ({ todo }) => {

    const URL_API = 'http://localhost:5000/todo/';
    const [description, setDescription] = useState(todo.description);

    const handleUpdate = async (e) => { 

        e.preventDefault();

        try {

            const body = { description };
            await fetch(`${URL_API}/${todo.id}`, {
                method : 'PUT',
                headers : {'Content-Type' : 'application/json'},
                body : JSON.stringify(body)
            });

            window.location.reload();
            
        } catch (err) {
            console.error(err.message);
        }

    };

    return(
        <>
            <button className="btn btn-success mr-2" data-toggle="modal" data-target={`#modal-${todo.id}`}>Edit</button>

            <div className="modal fade" id={`modal-${todo.id}`}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Todo</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control" defaultValue={description} onChange={e => setDescription(e.target.value)}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={e => handleUpdate(e)}>Save changes</button>
                        </div>
                    </div>
                </div>
</div>
        </>
    );
};

export default EditTodo;