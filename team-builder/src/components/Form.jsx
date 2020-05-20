import React, { useState } from 'react';

const Form = props => {
    console.log(props)

    const [teamMember, setTeamMember] = useState({
        name: '',
        email: '',
        role: ''
    });

    const handleChanges = e => {
        setTeamMember({...teamMember, [e.target.name]: e.target.value });
    };
    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(setTeamMember);
        setTeamMember({ name: '', email: '', role: ''})
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name</label>
            <input
                id='name'
                type='text'
                name='name'
                onChange={handleChanges}
                placeholder='Member Name'
                value={teamMember.name} 
            />
            <label htmlFor='email'>Email</label>
            <input
                id='email'
                type='email'
                name='email'
                onChange={handleChanges}
                placeholder='Email Address'
                value={teamMember.email} 
            />
            <label htmlFor='role'>Role</label>
            <input
                id='role'
                type='text'
                name='role'
                onChange={handleChanges}
                placeholder='Role'
                value={teamMember.role} 
            />
            <button type='submit'>Add Team Member</button>
        </form>
    )
};

export default Form;