
import styles from "./SearchBox.module.css";
import { useSearchContext } from '../../../context/searchContext';
interface ISearchBox{
  isSearchActive:boolean;
  onSearchChange?:(name:string)=>void;
}
const SearchBoxM:React.FC<ISearchBox> = ({isSearchActive}) => {
  
  const { setSearchQuery } = useSearchContext();
  
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className={`${styles.search__box} ${isSearchActive? styles.active__input:""}`}>
      <input type="search" placeholder="Buscar..." onChange={handleSearchChange} />
    </div>
  );
};

export default SearchBoxM;
