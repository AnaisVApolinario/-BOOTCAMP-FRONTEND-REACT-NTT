import { useState } from 'react'
import './App.css'
import Banner from './app/components/Banner/Banner'
import Header from './app/components/Header/Header'
import ProductList from './app/components/ProductList/ProductList'
import Footer from './app/components/Footer/Footer'


function App() {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [isBannerVisible, setIsBannerVisible] = useState<boolean>(true);  
  const [isFooterEmpty, setIsFooterEmpty] = useState(false);

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query); 
  };
  const handleCartQuantity = (quantity: number) => {
    setCartQuantity(eQuantity => eQuantity + quantity); 
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
     // Ocultar el banner cuando se seleccione una categoría
     if (category !== '') {
      setIsBannerVisible(false);
    } else {
      setIsBannerVisible(true);  // Mostrar el banner si no hay filtro
    }
  };
  const handleEmptyProducts = (isEmpty: boolean) => {
    setIsFooterEmpty(isEmpty); // Actualiza el estado según el número de productos
  };


  return (
    <>
      <Header onCategoryChange={handleCategoryChange}  cartQuantity={cartQuantity} onSearchChange={handleSearchQueryChange} />
      {isBannerVisible && <Banner />}  {/* Solo renderiza el Banner si isBannerVisible es true */}
      <ProductList category={selectedCategory} 
       handleCartQuantity={handleCartQuantity}
       searchQuery={searchQuery}
       onEmptyProducts={handleEmptyProducts}  />
      <Footer isFooterEmpty={isFooterEmpty} />
    </>
  )
}

export default App
