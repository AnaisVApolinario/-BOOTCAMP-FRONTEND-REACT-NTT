import styles from './Loader.module.css'; 

const Loader = () => {
  return (
    <div className={styles['loader__container']}>
      <div className={styles['loader']}></div>
      <p>Cargando...</p>
    </div>
  );
};

export default Loader;