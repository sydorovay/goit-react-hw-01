import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');
  
  const handleClick = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue('');
    } 
  }

  return (
    <div>
      <p>You typed: {inputValue}</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="YOoHOoo.."
        >
      </input>
      <button onClick={handleClick}>mahma</button>
      <ul>
        {items.map((item , index) => (
          <li key={index}> {item} </li>
        ))}
      </ul>
    </div>
      )
}

export default App