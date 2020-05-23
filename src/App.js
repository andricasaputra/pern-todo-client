import React from 'react';
import ListTodo from './components/ListTodo';
import InputTodo from './components/InputTodo';
import EditTodo from './components/EditTodo';

function App() {
  return(
    <>
      <div className="container mt-5">
          <InputTodo/>
          <ListTodo/>
      </div>
    </>
  );
}

export default App;
