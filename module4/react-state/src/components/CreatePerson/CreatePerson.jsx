function CreatePerson({ addPerson }) {
  
  const newPerson = {
    id: 10, // Used in JSX as a key
    name: "Creola Katherine Johnson 2",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  };

  return (
    <div>
      <button onClick={() => addPerson(newPerson)}>Create</button>
    </div>
  );
}

export default CreatePerson;
