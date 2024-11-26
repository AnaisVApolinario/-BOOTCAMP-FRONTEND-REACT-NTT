
import styles from './NotFound.module.css'; // Archivo CSS con BEM

const NotFound = () => {
  return (
    <div className={styles['not-found']}>
      <h1 className={styles['not-found__title']}>404</h1>
      <p className={styles['not-found__message']}>¡Oops! La página que buscas no existe.</p>
      <button 
        className={styles['not-found__button']} 
        onClick={() => window.location.href = '/'}
      >
        Volver al inicio
      </button>
    </div>
  );
};

export default NotFound;
