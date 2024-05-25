import {useState} from 'react';
import {nanoid} from 'nanoid';
import MinesweeperCell from '../Minesweeper/MinesweeperCell';
import MinesweeperDeck from '../MinesweeperContainer/MinesweeperDeck';
import MinesweeperResetButton from '../MinesweeperResetButton/MinesweeperResetButton';
import MinesweeperTries from '../MinesweeperTries/MinesweeperTries';

const Game = () => {
  const createItems = () => {
    const items = [];
    const randInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;
    for (let i = 0; i < 36; i++) {
      items.push({hasItem: false, clicked: false, id: nanoid()});
    }
    items[randInt(0, items.length)].hasItem = true;
    return items;
  };

  const [items, setItems] = useState(createItems());

  const cellList = items.map((item) => {
    return <MinesweeperCell key={item.id}/>;
  });

  return (
    <>
      <MinesweeperDeck> {cellList} </MinesweeperDeck>
      <MinesweeperResetButton/> <MinesweeperTries />
    </>
  );
};

export default Game;