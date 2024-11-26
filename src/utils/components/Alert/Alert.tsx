import styles from './Alert.module.css';
interface IAlert {
  message: string;
  icon:string;
  title: string;
  onClose: () => void;
}

const Alert: React.FC<IAlert> = ({ message, icon, title, onClose}) => {
  return (
    <div className={styles.alert}>
      <div className={styles.alert__content}>
        <div className={styles.alert__icon}>{icon}</div>
        <h2 className={styles.alert__title}>{title}</h2>
        <p className={styles.alert__message}>{message}</p>
        <button className={styles.alert__button} onClick={onClose}>
          Aceptar
        </button>
      </div>
    </div>
  )
}

export default Alert