import React, { useState } from 'react';
import TeamMembers from './components/TeamMembers'

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: 'name',
      email: '@'
    }
  ]);
  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email
    };
    setTeamMembers([...teamMembers, newMember]);
  };

  return (
    <div className="App">

      <h1>My Team</h1>
      <TeamMembers teamMembers={teamMembers} />

    </div>
  );
}

export default App;
