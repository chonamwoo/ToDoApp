import { Button, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React from 'react';
import './todo.css';
import db from './firebase';
function todo(props) {
    return (

    <List>
        <ListItem>
            <ListItemAvatar>

            </ListItemAvatar>
            <ListItemText primary= {props.todo.todo} secondary='⏲'/>
        </ListItem>
        <Button onClick ={event => db.collection('todos').doc(props.todo.id).delete()}>DELETE</Button>
    </List>

    )
}

export default todo
