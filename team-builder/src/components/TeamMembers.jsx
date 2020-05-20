import React from 'react'
import styled from 'styled-components';

//  STYLING ***********************
const ListWrap = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-evenly;
    align-items:center;
`;
const ListCard = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:flex-start;
    color: #8cf5fb;
    border: 3px solid #8cf5fb;
    border-radius: 7px;
    padding: 2rem;
    margin: 2rem 1rem;
`;
const StyledP = styled.p`
    font-size: 1.4rem;
    color: #8cf5fb;
    margin: 0.5rem;
`;

const TeamMembers = props => {

    return (
        <ListWrap>
                {props.teamMembers.map(member => (
                <ListCard key={member.id}>
                    <StyledP>Name: {member.name}</StyledP>
                    <StyledP>Email: {member.email}</StyledP>
                    <StyledP>Role: {member.role}</StyledP>
                </ListCard>
                ))}
        </ListWrap>
        
    );
}

export default TeamMembers;