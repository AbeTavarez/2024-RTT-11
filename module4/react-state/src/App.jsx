import { useState } from 'react';
import Counter from './components/Counter/Counter';
import PeopleList from "./components/PeopleList/PeopleList";
import CreatePerson from './components/CreatePerson/CreatePerson';

import { people } from "./data/people";
import "./App.css";

function App() {

  const [peopleState, setPeopleState] = useState(people);

  const addPerson = (newPerson) => {
    setPeopleState([...peopleState, newPerson]);
  }

  return (
    <>
      <h1>React State</h1>
      <Counter />

      <PeopleList people={peopleState} />
      <CreatePerson addPerson={addPerson}/>
    </>
  );
}

export default App;
