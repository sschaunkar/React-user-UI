import React from 'react'
import Button from '../UI/Button';
// import TextField from '@material-ui/core/TextField'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css'

function AddUser(props) {
    const [userInput, setUserInput] = React.useState({
        username: '',
        age: ''
    })
    const [error, setError] = React.useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput.username.trim().length === 0 || userInput.age.trim().length === 0) {
            setError({
                title: 'No Data Filled',
                message: 'Provide data to submit'
            })
            return;
        }
        props.onAddUser(userInput.username, userInput.age)
        setUserInput({
            username: '',
            age: ''
        })
    }

    const changeHandler = (e) => {
        setUserInput({ ...userInput, [e.target.name]: e.target.value })
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} />}

            <Card className={classes.input}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='username'>Username</label>
                    <input id="username" type='text' name='username' value={userInput.username} onChange={changeHandler} />
                    <label htmlFor='age'>Age (Years)</label>
                    <input id="age" type='number' min='0' name='age' value={userInput.age} onChange={changeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>

    )
}

export default AddUser
