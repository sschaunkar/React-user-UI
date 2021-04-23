import React from 'react';
import AddUser from './components/Users/AddUser';
import { Container } from '@material-ui/core';
import UsersList from './components/Users/UsersList';



function App() {
  const [userList, setUserList] = React.useState([]);

  const addUserHandler = (uname, uage) => {
    setUserList(prevList => {
      return [...prevList, { name: uname, age: uage }]
    })
  }
  return (
    <Container maxWidth="sm">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </Container>
  );
}

export default App;
