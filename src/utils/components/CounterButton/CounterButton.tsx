import styles from './CounterButton.module.css';
interface ICounterButton {
  type: "increment" | "decrement";
  onClick: () => void;
}

export const CounterButton: React.FC<ICounterButton> = ({type, onClick}) => {

  return (
    <button
      className={styles['product__quantity-button']} 
      onClick={onClick}
    >
      {type === "increment" ? "+" : "-"}
    </button>
  );
};