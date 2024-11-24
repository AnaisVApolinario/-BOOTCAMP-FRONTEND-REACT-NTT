import React from "react";
import styles from "./SearchBox.module.css";
interface ISearchBox{
  isSearchActive:boolean;
  onSearchChange?:(name:string)=>void;
}
const SearchBoxM:React.FC<ISearchBox> = ({isSearchActive, onSearchChange}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onSearchChange) {
      onSearchChange(event.target.value);
    }
  };
  return (
    <div className={`${styles.search__box} ${isSearchActive? styles.active__input:""}`}>
      <input type="search" id="search-input" placeholder="Buscar..." onChange={handleChange} />
    </div>
  );
};

export default SearchBoxM;
