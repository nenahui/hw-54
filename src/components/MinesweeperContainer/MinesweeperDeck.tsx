import styles from './MinesweeperDeck.module.scss';
import React from 'react';

interface MinesweeperContainerProps {
  children: React.ReactNode;
}

const MinesweeperDeck: React.FC<MinesweeperContainerProps> = ({ children }) => {
  return (
    <div className={styles['minesweeper-container']}>
      {children}
    </div>
  );
};

export default MinesweeperDeck;