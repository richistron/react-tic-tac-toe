//@flow
import React from 'react';

type Props = {|
  value: string,
  coords: {x: number, y: number},
  handleClick: ({x:number, y:number, value: string}) => void,
  user: 'X' | 'O',
|}

const Cell= ({value, handleClick, coords, user}: Props) => {
  const {x, y} = coords;
  return (
    <div
      onClick={() => {
        handleClick({x, y, value: user})
      }}
      className="col">
      {value ? value : '\u00A0'}
    </div>
  );
};


export default Cell;
