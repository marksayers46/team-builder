import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import userData from './data';

function App() {
  const data = userData;
  const [members, setMembers] = useState(data);

  const addNewMember = member => {
    setMembers([...members, member]);
  };

  return (
    <div className="App">
     <h1>Projects Forms</h1>
     <Form addNewMember = {addNewMember} />
    </div>
  );
}

export default App;