import React, {useState} from 'react';
import './App.css';
import Order from "./components/order";
import Product from "./components/Product";
import data from "./components/data";
import uuid from 'react-uuid';
import LoadModal from "./components/LoadModal";
// import CheckoutModal from "./components/CheckoutModal";

function App() {
    const [countProducts, setCountProducts] = useState<number[]>([0,0,0,0,0,0,0,0]);
    const [saveProducts, setSaveProducts] = useState<{name?: string, products?: number[]}[]>([]);
    const [openLoadModal, setOpenLoadModal] = useState<boolean>(false);
    const [loadInputValue, setLoadInputValue] = useState<string>('');
    const ordering = function(e:React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        const target = e.target as HTMLButtonElement;
        let orderingProducts = countProducts;
        let index: number = target.dataset.index=== undefined ? 0 : +target.dataset.index;
        let value: number = +target.value;
        orderingProducts[index] = orderingProducts[index] + value > 0 ? orderingProducts[index] + value : 0;
        setCountProducts([...orderingProducts]);
    }
    const closeLoadingModal = function(e:React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();
        setOpenLoadModal(false);
    }

    const sum =():string => {
        let sum: number = data.reduce((previousValue, currentValue,currentIndex) =>
            previousValue + currentValue.price * countProducts[currentIndex]
        , 0)
        return sum.toFixed(2);
    }

    const reset = (): void => {
        setCountProducts([0,0,0,0,0,0,0,0])
    }

    const save = (e:React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        let checked: boolean = countProducts.some(count => count !== 0)
        if(checked) {
            let s = saveProducts;
            let newProducts: { name?: string, products?: number[] } = {}
            newProducts.products = countProducts;
            newProducts.name = uuid();
            s.push(newProducts);
            setSaveProducts(s);
            reset();
        }
    }

    const openingLoadModal = (e:React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        setOpenLoadModal(true);
    }

    const loadingInputValue = (e:React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        const target = e.target as HTMLInputElement;
        setLoadInputValue(target.value);
    }

    const loading = (e:React.MouseEvent<HTMLInputElement>): void => {
        e.preventDefault();
        let loadValue = loadInputValue;
        let save = saveProducts.find(saves => saves.name === loadValue);
        console.log(save);
        if(save !== undefined && save.products !== undefined) {
            setCountProducts(save.products);
            setOpenLoadModal(false);
        }
        else alert('Invalid configuration number')
    }


  return (
    <div className="App">
      <div className='products'>
        <p className='products__title'>Your Products</p>
        <div className='wrapper'>
            <Product countProducts={countProducts}/>
        </div>
      </div>
      <form className='orderBlock'>
        <div className='orderBlock__header'>
          <p>Your Products</p>
          <p className='orderBlock__purchase'>{sum()}$</p>
          <input type='reset' value='Reset product' onClick={reset}/>
        </div>
        <Order countProducts={countProducts} setCountProducts={ordering}/>
          <div className='infoPurchases'>
              <p>Total</p>
              <p className='purchase__sum'>{sum()}$</p>
          </div>
          <div className='order__control'>
              <button className='order__saveBtn' onClick={save}>Save Product</button>
              <button className='order__checkoutBtn'>Checkout</button>
          </div>
          <div className='order__control' id='load__control'>
              <button className='order__loadBtn' onClick={openingLoadModal}>Load Product</button>
          </div>
          <ul className='load__products'>
              {saveProducts ? <h3>Load products</h3>: null}
              {saveProducts.map((save, i) =>
              <li key={i}>{save.name}</li>)}
          </ul>
      </form>
        <LoadModal open={openLoadModal} changingLoadModal={closeLoadingModal} inputValue={loadingInputValue} loading={loading}/>
        {/*<CheckoutModal countProducts={countProducts} />*/}
    </div>
  );
}

export default App;
