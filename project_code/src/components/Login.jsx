import { Button, Container, Grid2, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    
    const navigate = useNavigate();  // Initialize the useNavigate hook

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!validateEmail(e.target.value)) {
            setEmailError('Please enter a valid email');
        } else {
            setEmailError('');
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError('Password must be at least 8 characters');
        } else {
            setPasswordError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password && !Boolean(emailError) && !Boolean(passwordError)) {
            navigate('/dashboard');
        } else {
            alert('Login failed');
        }
    };

    return (
        <Container maxWidth="xs">
            <Paper className='paper' elevation={3}>
                <img src='./Code_review logo.png' alt='logo' />
                <form onSubmit={handleSubmit}>
                    <TextField
                        className='email'
                        label='Email'
                        variant='outlined'
                        fullWidth
                        value={email}
                        onChange={handleEmailChange}
                        error={Boolean(emailError)}
                        helperText={emailError}
                    />
                    <TextField
                        className='password'
                        label='Password'
                        variant='outlined'
                        fullWidth
                        type='password'
                        value={password}
                        onChange={handlePasswordChange}
                        error={Boolean(passwordError)}
                        helperText={passwordError}
                    />
                    <Button
                        className='loginButton'
                        variant='contained'
                        color='primary'
                        type='submit' // This should be type='submit'
                        fullWidth
                    >
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
                    >
                        Don't have an account? Sign up
                    </Link>
                </Grid2>
            </Paper>
        </Container>
    );
};

export default Login;
