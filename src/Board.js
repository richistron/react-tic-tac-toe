//@flow
import React, {useState} from 'react';
import Cell from './Cell';

const defaultState = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

type Props = {|
  handleChange: () => void,
  user: 'X' | 'O'
|}

const Board = ({handleChange, user}: Props) => {
  const [canvas, setCanvas] = useState(defaultState);
  const markCell = ({x, y, value}) => {
    const newCanvas = [...canvas];
    newCanvas[y][x] = value;
    setCanvas(newCanvas);
    handleChange();
  };
  return (
    <>
      {canvas.map((row, y) => (
        <div key={`row-${y}`} className="row">
          {row.map((col, x) => (
            <Cell key={`row-${x}`} coords={{x, y}} value={col} user={user} handleClick={markCell}/>
          ))}
        </div>
      ))}
    </>
  );
};

export default Board;
