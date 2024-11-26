import footerStyles from './Footer.module.css'; 
import { useVisibilityContext } from '../../context/VisibilityContext';

const Footer= () => {
  const { isFooterEmpty } = useVisibilityContext();
  return (
    <footer className={`${footerStyles.footer} ${isFooterEmpty ? footerStyles.no__content : ''}`}>
      <div className={footerStyles.footer__contact}>
        <h2 className={footerStyles.footer__title}>Contacto</h2>
        <p className={footerStyles.footer__item}>
          <i className="bx bxs-map"></i> Dirección: Calle Rosas 123, Lima, Perú
        </p>
        <p className={footerStyles.footer__item}>
          <i className="bx bxs-phone"></i> Teléfono: +51 956 789 245
        </p>
        <p className={footerStyles.footer__item}>
          <i className="bx bxs-envelope"></i> Correo: tam@gamil.com
        </p>
      </div>

      <div className={footerStyles.footer__newsletter}>
        <h2 className={footerStyles.footer__title}>Suscríbete</h2>
        <p className={footerStyles.footer__description}>
          Recibe actualizaciones, accede a ofertas exclusivas y más.
        </p>
        <div className={footerStyles.footer__newsletterInput}>
          <input
            className={footerStyles.footer__input}
            type="email"
            placeholder="Ingresa tu correo"
            required
          />
          <button className={footerStyles.footer__button} type="submit">
            Enviar
          </button>
        </div>
      </div>

      <p className={footerStyles.footer__copyright}>
        © 2024 TAM. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;