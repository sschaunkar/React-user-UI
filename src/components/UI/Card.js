import React from 'react'
import {Grid, Paper, TextField} from '@material-ui/core';
import classes from './Card.module.css'


function Card(props) {
    return (
        <div className={`${classes.card} ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Card
