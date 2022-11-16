import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
    LoginRegisterContainer,
    BoxContainer,
    TopContainer,
    HeaderContainer,
    HeaderText,
    SmallText,
    InnerContainer,
    InnerBoxContainer,
    FormContainer,
    Input,
    MutedLink,
    BoldLink,
    SubmitButton,
} from './LoginPageStyled';

const LoginPage = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username);
        navigate('/');
    }
    const handleUsernameChange= (e) => setUsername(e.target.value);

    return (
        <div>
            <LoginRegisterContainer>
                <BoxContainer>
                    <TopContainer>
                        <HeaderContainer>
                            <HeaderText>Welcome</HeaderText>
                            <HeaderText>Back</HeaderText>
                            <SmallText>Please log in to continue!</SmallText>
                        </HeaderContainer>
                    </TopContainer>
                    <InnerContainer>
                        <InnerBoxContainer>
                            <FormContainer onSubmit={handleSubmit}>
                                <Input placeholder="Username" onChange={handleUsernameChange}/>
                                <Input type="password" placeholder="Password"/>
                            </FormContainer>
                            <MutedLink >Forgot your password?</MutedLink>
                            <SubmitButton type="submit">Log In</SubmitButton>
                            <MutedLink>
                                Don't have an account?
                                <BoldLink href="../RegisterPage/RegisterPage">Register</BoldLink>
                            </MutedLink>
                        </InnerBoxContainer>
                    </InnerContainer>
                </BoxContainer>
            </LoginRegisterContainer>
        </div>
        
    );
}

export default LoginPage