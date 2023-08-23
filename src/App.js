import logo from './logo.svg';
import './App.css';

function App() {
  let counter = 0;

  function inc() {
    counter++;
    alert(counter);
  }
  return (
    <div>
      <h1>My Counter</h1>
      <p>{counter}</p>
      <button onClick={inc}>Click My</button>
    </div>
  )
}

export default App;
