import React from 'react';
import AddUser from './components/Users/AddUser';
import { Container } from '@material-ui/core';



function App() {
  return (
    <Container maxWidth="sm">
        <AddUser />    
    </Container>
  );
}

export default App;
