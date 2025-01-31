import './App.css';
import {useState} from 'react';

function MyButton(props) {
    const [count, SetCount] = useState(0);
    function handleClick() {
        SetCount(count +1)
    }
  return (
      <button onClick={handleClick}>I'm a button {count}</button>
  );
}

export default function MyApp() {
  return (
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>
  );
}

