import {useState} from 'react';
import {nanoid} from 'nanoid';
import MinesweeperCell from '../MinesweeperDeck/MinesweeperCell/MinesweeperCell';
import MinesweeperDeck from '../MinesweeperDeck/MinesweeperDeck';
import MinesweeperResetButton from '../MinesweeperDeck/MinesweeperResetButton/MinesweeperResetButton';
import MinesweeperTries from '../MinesweeperDeck/MinesweeperTries/MinesweeperTries';

interface MinesweeperProps {
  hasItem: boolean;
  clicked: boolean;
  id: string;
}

const Game = () => {
  const [items, setItems] = useState<MinesweeperProps[]>(createItems());
  const [cellFind, setCellFind] = useState(false);
  const [tries, setTries] = useState(0);

  function createItems(): MinesweeperProps[] {
    const items: MinesweeperProps[] = [];
    const randInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;
    for (let i = 0; i < 36; i++) {
      items.push({hasItem: false, clicked: false, id: nanoid()});
    }
    items[randInt(0, items.length - 1)].hasItem = true;
    return items;
  }

  const clickCell = (id: string) => {
    setItems((prevState) =>
      prevState.map((cell) =>
        cell.id === id && !cell.clicked ? {...cell, clicked: true} : cell
      )
    );

    const clickedCell = items.find((cell) => cell.id === id);

    if (clickedCell && clickedCell.hasItem) {
      setCellFind(true);
    }

    if (clickedCell && !clickedCell.clicked) {
      setTries(prevTries => prevTries + 1);
    }
  };

  const resetGame = () => {
    setCellFind(false);
    setTries(0);
    setItems(createItems());
  };

  const cellList = items.map((item) => {
    let className = 'minesweeper-cell';
    if (item.clicked) {
      className = item.hasItem ? 'minesweeper-cell-find' : 'minesweeper-cell-clicked';
    }
    return (
      <MinesweeperCell
        onClick={!cellFind ? () => clickCell(item.id) : () => null}
        className={className}
        key={item.id}
      />
    );
  });

  return (
    <>
      <MinesweeperDeck>{cellList}</MinesweeperDeck>
      <MinesweeperResetButton onClick={resetGame} />
      <MinesweeperTries tries={tries}/>
    </>
  );
};

export default Game;