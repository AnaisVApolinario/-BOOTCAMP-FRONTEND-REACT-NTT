import styles from './Icon.module.css'
// Definimos las propiedades que podrá tener el ícono
interface IIcon {
  children?: React.ReactNode; // Propiedad para añadir hijos al componente
  name: string; // Nombre del ícono de Boxicons (como 'bx-home', 'bx-cart', etc.)
  size?: string; // Tamaño opcional del ícono
  color?: string; // Color opcional del ícono
  onClick?: () => void; // Función opcional para manejar el evento onClick
}

export const Icon: React.FC<IIcon> = ({children, name, size = '24px', color = 'white', onClick}) => {
  // Establecemos el className usando el nombre del ícono
  const iconClassName = `bx ${name}`;

  // Aplicamos las propiedades de tamaño y color al ícono
  return (
    <i className={`${styles.icon} ${iconClassName}`} style={{fontSize: size, color: color}} onClick={onClick}>
      {children}
    </i>
  );
};