import styles from './MinesweeperTries.module.scss';

interface MinesweeperTriesProps {
  tries: number;
}

const MinesweeperTries: React.FC<MinesweeperTriesProps> = ({tries}) => {
  return (
    <span className={styles['minesweeper-tries']}>Tries: {tries}</span>
  );
};

export default MinesweeperTries;