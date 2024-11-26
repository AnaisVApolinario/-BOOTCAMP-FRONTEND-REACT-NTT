import styles from "./Button.module.css";
interface IButton {
  name: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset"; // Definimos el tipo del botón
}

export const Button: React.FC<IButton> = ({ name, onClick, type = "button" }) => {
  return (
    <button className={styles.product__add} type={type} onClick={onClick}>
      {name}
    </button>
  );
};