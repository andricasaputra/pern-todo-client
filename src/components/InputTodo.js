import React, { useState } from 'react';

const InputTodo = () => {

	const URL_API = 'http://localhost:5000/todo/';
	const [description, setDescription] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {

			const body = { description };
			const response = await fetch(URL_API, {
				method : 'POST',
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
			<h3>Add Todo List</h3>
			<form className="d-flex" onSubmit={handleSubmit}>
				<input type="text" className="form-control" onChange={e => setDescription(e.target.value)} />
				<button type="submit" className="btn btn-primary ml-3">Add</button>
			</form>
			<h4 className="text-center mt-3">List of Todos</h4>	
		</>
	);
};

export default InputTodo;