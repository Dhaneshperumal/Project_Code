import { Button, Container, Grid2, Paper, TextField,  } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswrodError] = useState('');

    const handleEmailchange =(e)=>{
        setEmail(e.target.value)
        if(!validateEmail(e.target.value)){
            setEmailError('Please enter valid email')
        }
        else{
            setEmailError('')
        }
    }

    const validateEmail =(email) =>{
        const emailRegex = /^[A-Z0-9. %+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email)
     }
    const handlePasswordchange =(e)=>{
        setPassword(e.target.value)
        if(e.target.value.length < 8){
            setPasswrodError('Password must be atleast 6 characters');
        }
        else{
            setPasswrodError('');
        }
    }
  return (
    <Container maxWidth="xs">
        <Paper className='paper' elevation={3}>
        <img src='./Code_review logo.png'/>
            <form>
                <TextField 
                className='email'
                label='Email'
                variant='outlined'
                fullWidth 
                value={email}
                onChange={handleEmailchange}
                error={Boolean(emailError)}
                helperText={emailError} 
                />
                <TextField 
                className='password' 
                label='Password' 
                variant='outlined' 
                fullWidth 
                value={password} 
                onChange={handlePasswordchange} 
                error={Boolean(passwordError)} 
                helperText={passwordError}
                />

                <Button 
                className='loginButton' 
                variant='contained' 
                color='primary' 
                type='sumbit' 
                fullWidth>
                    Login
                </Button>
            </form>

            <Grid2 
            container 
            justifyContent='center'
            >
                <Link 
                to='/signup' 
                className='link'
                >Don't have an account? signup 
                </Link>
            </Grid2>
        </Paper>
    </Container>
  )
}

export default Login