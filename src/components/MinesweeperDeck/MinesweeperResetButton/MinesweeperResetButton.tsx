import styles from './MinesweeperResetButton/MinesweeperResetButton.module.scss';

interface MinesweeperResetButtonProps {
  onClick: () => void;
}

const MinesweeperResetButton: React.FC<MinesweeperResetButtonProps> = ({onClick}) => {
  return (
    <button className={styles['minesweeper-btn']} onClick={onClick}>Reset</button>
  );
};

export default MinesweeperResetButton;