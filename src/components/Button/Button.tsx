import styles from "./Button.module.css";
interface IButton {
  name: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset"; 
  styleButton?:string
}

export const Button: React.FC<IButton> = ({ name, onClick, type = "button", styleButton='product__add' }) => {
  return (
    <button className={styles[styleButton]} type={type} onClick={onClick}>
      {name}
    </button>
  );
};