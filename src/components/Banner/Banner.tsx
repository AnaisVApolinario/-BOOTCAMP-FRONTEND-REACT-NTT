import styles from "./Banner.module.css";
import banner from "../../assets/banner.png";
const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__text}>
        <h1>TODO LO QUE NECESITAS</h1>
        <h2>EN UN SOLO LUGAR</h2>
      </div>
      <div className={styles.banner__img}>
        <img src={banner} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
