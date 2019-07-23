//@flow
import React, {useState} from 'react';
import Board from './Board';

const App = () => {
  const [user, changeUser] = useState('X');
  const handleUserChange = () => {
    if (user === 'X') {
      changeUser('O')
    }
    else {
      changeUser('X')
    }
  };
  return (
    <div className={'container'}>
      <h1> Tic Tac Toe Game</h1>
      User: {user}
      <Board user={user} handleChange={handleUserChange}/>
    </div>
  )
};

export default App;
