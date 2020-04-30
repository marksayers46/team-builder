import React, { useState } from 'react';
import './App.css';
import Forms from "./components/Forms";
import FormsDisplay from './components/FormsDisplay';

function App() {
  const data = [
    {
      name: 'Jay Lee Kennedy',
      email: 'dreampoetlee@gmail.com',
      role: 'Full-Stack Dev'
    },
    {
      name: 'Aaron Matson',
      email: 'matsonaaron1@gmail.com',
      role: 'Full-Stack Dev'
    },
    {
      name: 'Rabah Babaci',
      email: '4rabah@gmail.com',
      role: 'Full-Stack Dev'
    }
  ];

  const [members, setMembers] = useState(data);

  const addNewMember = member => {
    setMembers([...members, member]);
  };

  return (
    <div className="App">
     <h1>Project Forms</h1>
     <Forms addNewMember = {addNewMember} />
     <FormsDisplay data={members} />
    </div>
  );
}

export default App;