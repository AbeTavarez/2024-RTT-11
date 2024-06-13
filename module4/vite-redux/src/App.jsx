import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCount,
  selectState,
  increase,
  decrease,
} from "./slices/counterSlice";

import { selectTodos } from "./slices/todoSlice";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState(1);

  const count = useSelector(selectCount);
  console.log(count);

  const todos = useSelector(selectTodos);
  console.log(todos);

  // dispatch
  const dispatch = useDispatch();

  return (
    <>
      <h1>Redux App</h1>

      <div>
        <h2>Counter: {count}</h2>

        <div>
          <button onClick={() => dispatch(increase(inputValue))}>
            Increase
          </button>

          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            min="1"
          />

          <button onClick={() => dispatch(decrease(inputValue))}>
            Decrease
          </button>
        </div>
      </div>

      <section>
        {todos &&
          todos.map((todo) => (
            <div key={todo.id} style={{ display: "flex" }}>
              <input type="checkbox" />
              <div>{todo.title}</div>
              <button>edit</button>
              <button>delete</button>
            </div>
          ))}
      </section>
    </>
  );
}

export default App;
