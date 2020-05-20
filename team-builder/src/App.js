import React, { useState } from 'react';
import TeamMembers from './components/TeamMembers';
import Form from './components/Form'

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: 'Mary',
      email: 'mary-waters@lambdastudents.com',
      role: 'Future Full-Stack Developer'
    }
  ]);
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setTeamMembers([...teamMembers, newMember]);
  };

  return (
    <div className="App">

      <h1>My Team</h1>
      <TeamMembers teamMembers={teamMembers} />
      <h2>Add New Team Member</h2>
      <Form addNewMember={addNewMember}/>

    </div>
  );
}

export default App;
