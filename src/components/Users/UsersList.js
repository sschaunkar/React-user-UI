import React from 'react';
import classes from './UsersList.module.css';
import Card from '../UI/Card'


function UsersList(props) {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user, index) => (
                    <li key={index}>{`Name: ${user.name} Age: ${user.age}`}</li>
                ))}

            </ul>
        </Card>
    )
}

export default UsersList
