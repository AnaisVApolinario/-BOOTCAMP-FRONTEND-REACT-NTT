import styles from "./Alert.module.css";
interface IAlert {
  message: string;
  icon: string;
  title: string;
  textButton: string;
  onClose: () => void;
}

const Alert: React.FC<IAlert> = ({
  message,
  icon,
  title,
  textButton,
  onClose,
}) => {
  return (
    <div className={styles["alert"]}>
      <div className={styles["alert__content"]}>
        <div className={styles["alert__icon"]}>{icon}</div>
        <h2 className={styles["alert__title"]}>{title}</h2>
        <p className={styles["alert__message"]}>{message}</p>
        <button className={styles["alert__button"]} onClick={onClose}>
          {textButton}
        </button>
      </div>
    </div>
  );
};

export default Alert;
