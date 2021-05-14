
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Header from './components/header/Header';
import ProductList from './components/product-list/ProductList'
import { setProducts } from './redux';

function App() {
  const { products } = useSelector(({ cart: { cart }, wishlist: { wishlist }, products: { products } }) => ({ cart, wishlist, products }));

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(setProducts());
  }, [dispatch])

  return (
    <div className="App ">

      <Header></Header>
      <ProductList products={products} />

    </div>
  );
}

export default App;
