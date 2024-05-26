import React from 'react';
import styles from './MinesweeperCell.module.scss';

interface MinesweeperCellProps {
  className: string;
  onClick: () => void;
}

const MinesweeperCell: React.FC<MinesweeperCellProps> = ({ className, onClick }) => {
  return (
    <div onClick={onClick} className={`${styles['minesweeper-cell']} ${styles[className]}`}></div>
  );
};

export default MinesweeperCell;
