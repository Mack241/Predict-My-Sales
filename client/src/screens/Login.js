import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { login } from '../actions/userAction'

const Login = ({ history }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    let path = '/'

    useEffect(() => {

    },[history, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(username, password))
        if(userInfo){
            history.push(path)
        }
    }

    return (
     <Body>
        <Container>
            <Logo>
                <img src="/images/logo.png" alt=""/>
            </Logo>
            <Input>
             <form onSubmit={submitHandler}>
                <input type="text"
                 id="username" 
                 placeholder="Username" 
                 value={username} 
                 onChange={(e) => setUsername(e.target.value)} />
                <input type="password" 
                 id="password" 
                 placeholder="Password" 
                 value={password} 
                 onChange = {(e) => setPassword(e.target.value)}/>
                <button>Submit</button> 
             </form>
            </Input>
        </Container>
     </Body>
    )
}

const Body = styled.div`
    background-image: url('/images/login-bg.png');
    
    margin: 0;
`;

const Container = styled.div`
    margin: auto;
    margin-top: 60px;
    background-color: #fff;
    border-radius: 5px;
    max-width: 700px;
    padding: 10px;
    box-shadow: 10px 10px 5px -4px rgba(174,206,229,0.75);
    -webkit-box-shadow: 10px 10px 5px -4px rgba(174,206,229,0.75);
    -moz-box-shadow: 10px 10px 5px -4px rgba(174,206,229,0.75);
    width: 700px;
    height: 450px;
    display: flex;
    flex-direction: column;

    button{
        max-width: 200px;
        margin-top: 50px;
        margin-left: 0px;
        padding: 8px;
        width: 150px;
        height: 30px;
        background-color: #0bd604;
        border-radius: 5px;
        box-shadow: none;
        border: none;
        cursor: pointer;
        color: #fff;

        &:hover {
            border: 1.5px solid #097a2d;
            padding: 8px;
        }
    }
`;

const Logo = styled.div`
    margin-top: 20px;
    img{
        width: 280px;
        height: 130px;
        margin-bottom: 10px;
    }
`;

const Input = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    justify-content: center;
    width: 300px;
    margin: 30px 0 0 200px;

    input{
        margin-top: 20px;
        border: none;
        border-radius: 5px;
        padding: 8px;
        background: #cfcfcf;

        &:hover {
            border: 1.5px solid black;
        }
    }
  
`;

export default Login