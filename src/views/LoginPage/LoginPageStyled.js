import styled from 'styled-components';

export const LoginRegisterContainer = styled.div`
    width: 1200;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10;
`;

export const BoxContainer = styled.div`
    width: 280 px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    background-color: white;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
`;

export const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0.5 0.5em;
    padding-bottom: 5em;
    padding-right: 5em;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const HeaderText = styled.h2`
    font-size: 30px;
    font-weight: 600;
    line-height: 1.3;
    color: black;
    
    margin: 0;
`;

export const SmallText = styled.h5`
    color: black;
    font-size: 11px;
    font-weight: 500;
    
    margin: 0;
    margin-top: 7px;
`;

export const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.8em;
`;
export const InnerBoxContainer = styled.div`
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
`;
export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const Input = styled.div`
    width: 100%;
    height: 42px;
    outline: none;
    border: 1px solid rgba(200, 200, 200, 0.4 );
    padding: 0px 10px;
    border-bottom: 1.4px solid transparent;
    outline: none;
    border-bottom: 2px solid rgb(2,0,36);
`;

export const MutedLink = styled.div`
    font-size: 12px;
    color: rgba(200, 200, 200, 0.8);
    font-weight: 500;
    text-decoration: none;
`;
export const SubmitButton = styled.div`
    width: 100%;
    padding: 11px 40%;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(11,221,46,1) 35%, rgba(0,212,255,1) 100%);

`;

export const BoldLink = styled.div`
    font-size: 12px;
    color: rgb(2,0,36);
    font-weight: 500;
    text-decoration: none;
`;
