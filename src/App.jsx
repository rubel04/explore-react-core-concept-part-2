import './App.css'
import Counter from './Count';
import Counter2 from './Count-2';
import Team from './Team';
import User from './User';
import Friends from './Friends';

function App() {
  function HandleClick() {
    alert('hello first');
  }
  const HandleClick2 = () => {
    alert('hello second');
  }

  const AddToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h1>React core concept</h1>
      <Counter />
      <Counter2 />
      <Team />
      <User />
      <Friends />

      <button onClick={HandleClick}>Click me</button>
      <button onClick={HandleClick2}>Click me2</button>
      <button onClick={()=> alert('hello third')}>Click me3</button>
      <button onClick={() => AddToFive(5)}>Click me4</button>
    </>
  )
}

export default App

/* 
1. declare a state to hold the data
2. useEffect with callback and dependency array
3. use fetch to load data
*/
