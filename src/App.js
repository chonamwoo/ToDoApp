import React, { useEffect, useState } from 'react';
import Todo from './todo'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import './App.css';
import db from'./firebase';
import firebase from'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  //console.log('🧧', input)

  useEffect(()=>{
   // '일어나기','점심 먹기', '숙제 하긔','공부 하기','저녁 하기','잠자기' 
   db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot => {
     setTodos(snapshot.docs.map(doc => ({id: doc.id , todo: doc.data().todo})))
   })
  }, []);

  const addTodo = (event) =>{
    //button 누룰때 
    event.preventDefault();
    
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    //console.log('🎃', '굳');
    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>안녕!🎆</h1>
      <form>

        <FormControl>
          <InputLabel>오늘 뭐하지</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        
        
        <Button disabled={!input} type ='submit' onClick={addTodo} variant="contained" color="primary">
        Add todo
        </Button>
        
      </form>

      <ul>
        {todos.map(todo =>(
          <Todo todo ={todo}/>
          //<li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
 

export default App;
