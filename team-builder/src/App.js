import React, { useState } from 'react';
import TeamMembers from './components/TeamMembers';
import Form from './components/Form'
import styled from 'styled-components'

//  STYLING ***********************
const AppWrap = styled.div`
   max-width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin: 0 auto;
`;

const HeadTitle = styled.h1`
    font-size:4rem;
    font-family:'Roboto', sans-serif;
    color:#8cf5fb;
    margin:0;
    padding:0;
`;

const SecondTitle = styled.h2`
    font-size:3rem;
    font-family:'Roboto', sans-serif;
    color:#8cf5fb;
    margin:5rem 0 0 0;
    padding:0;
`;

// CODE *****************************

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
    <AppWrap>

      <HeadTitle>My Team</HeadTitle>
      <TeamMembers teamMembers={teamMembers} />
      <SecondTitle>Add New Team Member</SecondTitle>
      <Form addNewMember={addNewMember}/>

    </AppWrap>
  );
}

export default App;
