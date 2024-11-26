import styles from './Icon.module.css'

interface IIcon {
  children?: React.ReactNode; 
  name: string; 
  size?: string; 
  color?: string; 
  onClick?: () => void; 
}

export const Icon: React.FC<IIcon> = ({children, name, size = '24px', color = 'white', onClick}) => {

  const iconClassName = `bx ${name}`;

  return (
    <i className={`${styles.icon} ${iconClassName}`} style={{fontSize: size, color: color}} onClick={onClick}>
      {children}
    </i>
  );
};