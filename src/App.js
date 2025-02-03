import './App.css';
import {useState} from 'react';




export default function App() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    {/*  Création d'une nouvelle tâche sur une base de tableau vide  */}
    function createTodos() {
        const newTodos = [];
        return newTodos;
    }
    {/*  Supression d'une tâche par filtration d'id  */}
    function Supr(id) {
        setTodos(todos.filter((_item, index) => index !== id));
    }

    return (
        <div className="Todo">
            {/*  Zone entrée de texte  */}
            <h1>ToDo List</h1>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
            />
            {/*  Bouton d'ajout d'une tâche avec réinitialisation une fois clické  */}
            <button onClick={() => {
                setTodos([...todos, text]);
                setText('')
            }}>Add</button>

            {/*  Affichage des tâches  */}
            <ul>
                {todos.map((item, id) => (
                    <li key={id}>
                        {item} <button onClick={() => Supr(id)}>Suprimer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
