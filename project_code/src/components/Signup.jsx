import { Button, Container, Grid2, MenuItem, Paper, Select, TextField, FormControl, InputLabel } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [role, setRole] = useState('');

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

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value.length < 8) {
            setConfirmPasswordError('Password must be at least 8 characters');
        } else if (e.target.value !== password) {
            setConfirmPasswordError('Passwords do not match');
        } else {
            setConfirmPasswordError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password && !Boolean(emailError) && !Boolean(passwordError) && !Boolean(confirmPasswordError)) {
            alert('Signup Successfully');
        }
    };

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    return (
        <Container maxWidth="xs">
            <Paper className="paper" elevation={3}>
                <img src="./Code_review logo.png" alt="Code Review Logo" />
                <form onSubmit={handleSubmit}>
                    <TextField
                        className="email"
                        label="Email"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={handleEmailChange}
                        error={Boolean(emailError)}
                        helperText={emailError}
                    />
                    <FormControl fullWidth>
                        <InputLabel id="role-label">Role</InputLabel>
                        <Select
                            labelId="role-label"
                            id="role-select"
                            value={role}
                            label="Role"
                            onChange={handleRoleChange}
                        >
                            <MenuItem value="Admin">Admin</MenuItem>
                            <MenuItem value="Senior Developer">Senior Developer</MenuItem>
                            <MenuItem value="Junior Developer">Junior Developer</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        className="password"
                        label="Password"
                        variant="outlined"
                        fullWidth
                        value={password}
                        onChange={handlePasswordChange}
                        error={Boolean(passwordError)}
                        helperText={passwordError}
                    />
                    <TextField
                        className="confirmpassword"
                        label="Confirm Password"
                        variant="outlined"
                        fullWidth
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        error={Boolean(confirmPasswordError)}
                        helperText={confirmPasswordError}
                    />
                    <Button className="loginButton" variant="contained" color="primary" type="submit" fullWidth>
                        Signup
                    </Button>
                </form>
                <Grid2 container justifyContent="center">
                    <Link to="/signup" className="link">
                        Don't have an account? Signup
                    </Link>
                </Grid2>
            </Paper>
        </Container>
    );
};

export default Signup;
