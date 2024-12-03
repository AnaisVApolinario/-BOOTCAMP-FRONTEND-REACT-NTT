import styles from './Icon.module.css'

interface IIcon {
  children?: React.ReactNode; 
  iconName: string; 
  size?: string; 
  color?: string; 
  onClick?: () => void; 
}

const Icon: React.FC<IIcon> = ({children, iconName, size = '24px', color = 'white', onClick}) => {
  return (
    <i className={`${styles.icon} ${iconName}`} style={{fontSize: size, color: color}} onClick={onClick} role="img">
      {children}
    </i>
  );
};
export default Icon;