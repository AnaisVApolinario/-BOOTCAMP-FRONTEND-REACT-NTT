
import styles from "./SearchBox.module.css";
import { useSearchContext } from '../../context/searchContext';
import { useVisibilityContext } from "../../context/VisibilityContext";
interface ISearchBox{
  isSearchActive:boolean;
  onSearchChange?:(name:string)=>void;
}
const SearchBoxM:React.FC<ISearchBox> = ({isSearchActive}) => {
  
  const { setSearchQuery } = useSearchContext();
  const {setActive} = useVisibilityContext();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.value.length > 0){
      setActive("banner", false);
      setActive("footer", true);
    }else{
      setActive("banner", true);
      setActive("footer", false);
    }
    setSearchQuery(event.target.value);
  };

  return (
    <div className={`${styles['search__box']} ${isSearchActive? styles['active__input']:""}`}>
      <input type="search" placeholder="Buscar..." onChange={handleSearchChange} />
    </div>
  );
};

export default SearchBoxM;
