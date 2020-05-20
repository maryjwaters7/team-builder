import React, { useState } from 'react';
import styled from 'styled-components';

//  STYLING ***********************
const FormStyle = styled.form`
    display: flex;
    flex-direction:column;
    justify-content:space-between;
`;
const InputWrap = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    align-items:center;
`;
const Label = styled.label`
    font-size: 1.8rem;
    font-family: 'Roboto', sans-serif;
    color: #8cf5fb;
`;
const InputBox = styled.input`
    height:2rem;
    border-radius: 5px;
    padding: 0.3rem;
    margin: 0.3rem;
    border: 1px solid #8cf5fb;
    background-color: #000000;
    color: #8cf5fb;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    `;
const Button = styled.button`
    border: 2px solid #8cf5fb;
    border-radius: 2px;
    background-color:#000000;
    color: #8cf5fb;
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    padding:0.6rem 0rem;
    margin: 1rem;
`;

// CODE *****************************

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
        props.addNewMember(teamMember);
        setTeamMember({ name: '', email: '', role: ''})
    };

    return (
        <FormStyle onSubmit={submitForm}>
            <InputWrap>
                <Label htmlFor='name'>Name</Label>
                <InputBox
                    id='name'
                    type='text'
                    name='name'
                    onChange={handleChanges}
                    placeholder='Member Name'
                    value={teamMember.name} 
                />
            </InputWrap>
            <InputWrap>
                <Label htmlFor='email'>Email</Label>
                <InputBox
                    id='email'
                    type='email'
                    name='email'
                    onChange={handleChanges}
                    placeholder='Email Address'
                    value={teamMember.email} 
                />
            </InputWrap>
            <InputWrap>
                <Label htmlFor='role'>Role</Label>
                <InputBox
                    id='role'
                    type='text'
                    name='role'
                    onChange={handleChanges}
                    placeholder='Role'
                    value={teamMember.role} 
                />
            </InputWrap>
            <Button type='submit'>Add Team Member</Button>
        </FormStyle>
    )
};

export default Form;