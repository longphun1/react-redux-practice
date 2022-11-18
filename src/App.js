import { useState, useEffect } from 'react'
import Home from "./component/home/home.component";

function App() {
  const [activity, setActivity] = useState(''); // setting the state 'activity' as an empty string, setActivity updates the 'activity' state
  console.log("1") // gets called first time when app mount and a second time when useEffect gets fired
  useEffect(() => {  // side effect to only trigger once and avoid infinite re-rendering
      console.log("2")
      fetch('https://www.boredapi.com/api/activity') // fetching an api call
          .then((response) => response.json())
          .then((toDo) => setActivity(toDo)); // getting the response.json and passing it into the setActivity state as 'toDo'
  }, []);

  return (
    <div className="App">
      <Home activity={activity}/> {/* pass in activity state into home component */}
    </div>
  );
}

export default App;
