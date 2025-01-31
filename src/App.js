import './App.css';
import {useState} from 'react';

function createTodos() {
    const Todos = [];

    return Todos;
}

function Supr(id) {
    TodoList = TodoList.filter(i => i.id !== id);
    return TodoList;
}

export default function TodoList() {
    const [todos, setTodos] = useState(createTodos);
    const [text, setText] = useState('');

    return (
        <>
            <input
                onChange={e => setText(e.target.value)}
            />
            <button onClick={() => {
                setTodos([...todos, text]);
            }}>Add</button>
            <ul>
                {todos.map((item, id) => (
                    <li key={id}>
                        {text} <button onClick={() => Supr(id)}>Suprimer</button>
                    </li>
                ))}
            </ul>
        </>
    );
}
