import { useReducer, useState } from "react";
import "./App.css";

// Reducer function
function counterReducer(state, action) {
  console.log(action);

  switch (action.type) {
    case "increment": {
      return {
        count: action.payload
          ? state.count + Number(action.payload)
          : state.count + 1,
      };
    }

    case "decrement": {
      return {
        count: state.count - 1,
      };
    }

    default: {
      return state;
    }
  }
}

function App() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  const [newValue, setNewValue] = useState(0);

  return (
    <>
      <h1>Reducer Counter</h1>

      <h2>Counter: {state.count}</h2>

      <div>
        <button
          onClick={() => dispatch({ type: "increment", payload: newValue })}
        >
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
      </div>

      <div>
        <input
          type="number"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
      </div>
    </>
  );
}

export default App;
