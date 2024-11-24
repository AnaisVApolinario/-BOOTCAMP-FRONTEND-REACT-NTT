import React from "react";
import styles from "./SearchBox.module.css";
interface ISearchBox{
  isSearchActive:boolean;
}
const SearchBoxM:React.FC<ISearchBox> = ({isSearchActive}) => {
  return (
    <div className={`${styles.search__box} ${isSearchActive? styles.active__input:""}`}>
      <input type="search" id="search-input" placeholder="Buscar..." />
    </div>
  );
};

export default SearchBoxM;
