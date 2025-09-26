import { useState } from 'react'
import TasksDone from './TasksDone';
import Form from './Form';

function List() {
    const [todos, setTodos] = useState([]);
    const [completedTodos, setCompletedTodos] = useState([]);

    let total_todos = todos.length;
    let todos_completed = completedTodos.length;

    function handleAddTodo() {
        const newTodoText = document.getElementById("inputField").value;
        document.getElementById("inputField").value = "";

        if (newTodoText.trim() !== "") {
            const newTodo = {
                id: Date.now(), 
                text: newTodoText
            };
            setTodos(t => [...t, newTodo]);
        }
    }

    function handleDeleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
        setCompletedTodos(completedTodos.filter(t => t.id !== id));
    }

    function handleCheck(id) {
        const todo = todos.find(t => t.id === id);

        if (completedTodos.some(t => t.id === id)) {
            setCompletedTodos(completedTodos.filter(t => t.id !== id));
        } else {
            setCompletedTodos([...completedTodos, todo]);
        }
    }

    return (
        <>
            <TasksDone todos_completed={todos_completed} total_todos={total_todos} />
            <Form onClick={handleAddTodo}/>

            <div className='list'>
                <ul>
                    {todos.map(todo => (
                        <li 
                            key={todo.id} 
                            className={completedTodos.some(t => t.id === todo.id) ? "completed" : ""}
                        >
                            <input 
                                className="check" 
                                type="checkbox" 
                                checked={completedTodos.some(t => t.id === todo.id)}
                                onChange={() => handleCheck(todo.id)} 
                            />
                            {todo.text}
                            <button 
                                className="deleteButton" 
                                onClick={() => handleDeleteTodo(todo.id)}
                            >
                                &#x1f5d1;
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default List;
