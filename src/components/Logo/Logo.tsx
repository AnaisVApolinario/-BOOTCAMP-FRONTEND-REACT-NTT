import styles from './Logo.module.css'
import logo from "../../assets/logo.png";
interface ILogo {
  styleLogo?: string;
}
const Logo:React.FC<ILogo> = ({styleLogo='header__logo_img'}) => {
  return (
    <img
    src={logo}
    alt="Logo de TAM"
    className={styles[styleLogo]}/>
  )
}

export default Logo