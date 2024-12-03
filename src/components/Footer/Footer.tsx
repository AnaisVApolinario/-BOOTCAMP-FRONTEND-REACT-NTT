import { useVisibilityContext } from '../../context/VisibilityContext';
import styles from './Footer.module.css'; 

const Footer= () => {
  const {toggles}= useVisibilityContext();
  const isFooterEmpty = toggles["footer"] ?? false;
  
  return (
    <footer className={`${styles['footer']} ${isFooterEmpty ? styles['no__content'] : ''}`}>
      <div className={styles['footer__contact']}>
        <h2 className={styles['footer__title']}>Contacto</h2>
        <p className={styles['footer__item']}>
          <i className="bx bxs-map"></i> Dirección: Calle Rosas 123, Lima, Perú
        </p>
        <p className={styles['footer__item']}>
          <i className="bx bxs-phone"></i> Teléfono: +51 956 789 245
        </p>
        <p className={styles['footer__item']}>
          <i className="bx bxs-envelope"></i> Correo: tam@gamil.com
        </p>
      </div>

      <div className={styles['footer__newsletter']}>
        <h2 className={styles['footer__title']}>Suscríbete</h2>
        <p className={styles['footer__description']}>
          Recibe actualizaciones, accede a ofertas exclusivas y más.
        </p>
        <div className={styles['footer__newsletterInput']}>
          <input
            className={styles['footer__input']}
            type="email"
            placeholder="Ingresa tu correo"
            required
          />
          <button className={styles['footer__button']} type="submit">
            Enviar
          </button>
        </div>
      </div>

      <p className={styles['footer__copyright']}>
        © 2024 TAM. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;