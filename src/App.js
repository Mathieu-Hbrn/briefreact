import './App.css';
import {useState} from 'react';




export default function App() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    function createTodos() {
        const newTodos = [];
        return newTodos;
    }

    function Supr(id) {
        setTodos(todos.filter((_item, index) => index !== id));
    }

    return (
        <>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={() => {
                setTodos([...todos, text]);
                setText('')
            }}>Add</button>
            <ul>
                {todos.map((item, id) => (
                    <li key={id}>
                        {item} <button onClick={() => Supr(id)}>Suprimer</button>
                    </li>
                ))}
            </ul>
        </>
    );
}
