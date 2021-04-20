import React from 'react'
// import TextField from '@material-ui/core/TextField'
import Card from '../UI/Card'
import classes from './AddUser.module.css'

function AddUser() {
    return (
        <Card className={classes.input}>
            <form>
                <input id="filled-basic" label="Username" variant="filled" type='text' />
                <input id="filled-basic" label="Age(years)" variant="filled" type='number' />
            </form>
        </Card>

    )
}

export default AddUser
