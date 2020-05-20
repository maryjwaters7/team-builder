import React from 'react'

const TeamMembers = props => {
    console.log(props)

    return (
        <div className='member-list'>
            {props.teamMembers.map(member => (
            <div className='member' key={member.id}>
                <h2>Name: {member.name}</h2>
                <p>Email: {member.email}</p>
            </div>
            ))};
        </div>
        
    );
}

export default TeamMembers;