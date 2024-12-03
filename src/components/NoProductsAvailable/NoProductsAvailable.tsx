import React from 'react';
import styles from './NoProductsAvailable.module.css'; 

const NoProductsAvailable: React.FC = () => {
  return (
    <div className={styles['no-products__container']}>
    <h1 className={styles['no-products__title']}>Lo sentimos, los productos no están disponibles</h1>
    <p className={styles['no-products__message']}>
      Actualmente no tenemos productos en stock. ¡Vuelve pronto!
    </p>
  </div>
  );
};

export default NoProductsAvailable;