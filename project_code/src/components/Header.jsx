import React from 'react'
import {AppBar, Button, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
    
  return (
    <AppBar position='static'>
        <Toolbar className='header'>
            <h2>Code Review Automation</h2>
            <Button color='inherit' component={Link} to='/login'>Login</Button>
            <Button color='inherit'  component={Link} to='/signup'>Signup</Button> 
        </Toolbar>
    </AppBar>
  )
}

export default Header