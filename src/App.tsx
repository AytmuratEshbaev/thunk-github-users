import React, { useState } from 'react';
import './App.css';
import Order from "./components/order";
import Product from "./components/Product";
import data from "./components/data";
import uuid from 'react-uuid';
import LoadModal from "./components/LoadModal";
import CheckoutModal from "./components/CheckoutModal";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Checkout from './components/Checkout';

function App() {
    const [countProducts, setCountProducts] = useState<number[]>([0, 0, 0, 0, 1, 0, 0, 0]);
    const [saveProduct, setSaveProduct] = useState<{ name: string, products: number[] }>();
    const [openLoadModal, setOpenLoadModal] = useState<boolean>(false);
    const [openCheckoutModal, setOpenCheckoutModal] = useState<boolean>(false);
    const [loadInputValue, setLoadInputValue] = useState<string>('');

    const ordering = function (e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const target = e.target as HTMLButtonElement;
        let orderingProducts = countProducts;
        let index: number = target.dataset.index === undefined ? 0 : +target.dataset.index;
        let value: number = +target.value;
        orderingProducts[index] = orderingProducts[index] + value > 0 ? orderingProducts[index] + value : 0;
        setCountProducts([...orderingProducts]);
    }


    const closeLoadingModal = function (e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setOpenLoadModal(false);
    }

    const closeCheckoutModal = function (e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setOpenCheckoutModal(false);
    }

    const sum = (): string => {
        let sum: number = data.reduce((previousValue, currentValue, currentIndex) =>
            previousValue + currentValue.price * countProducts[currentIndex]
            , 0)
        return sum.toFixed(2);
    }

    const loadingInputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault();
        const target = e.target as HTMLInputElement;
        setLoadInputValue(target.value);
    }

    const loading = (e: React.MouseEvent<HTMLInputElement>): void => {
        e.preventDefault();
        let loadValue = loadInputValue;
        if (saveProduct !== undefined && saveProduct.name === loadValue) {
            setCountProducts(saveProduct.products);
            setOpenLoadModal(false);
        }
        else alert('Invalid configuration number')
    }

    function Home() {
        return (
            <div className="App">
                <div className='products'>
                    <p className='products__title'>Your Products</p>
                    <div className='wrapper'>
                        <Product countProducts={countProducts} />
                    </div>
                </div>
                <form className='orderBlock'>
                    <div className='orderBlock__header'>
                        <p>Your Products</p>
                        <p className='orderBlock__purchase'>{sum()}$</p>
                        <input type='reset' value='Reset product' 
                        onClick={() => setCountProducts([0, 0, 0, 0, 1, 0, 0, 0])} />
                    </div>
                    <Order countProducts={countProducts} setCountProducts={ordering} />
                    <div className='infoPurchases'>
                        <p>Total</p>
                        <p className='purchase__sum'>{sum()}$</p>
                    </div>
                    <div className='order__control'>
                        <button className='order__saveBtn' 
                        onClick={() => setSaveProduct({name: uuid(),products: countProducts})}>Save Product</button>
                        <button className='order__checkoutBtn' 
                        onClick={() => setOpenCheckoutModal(true)}>Checkout</button>
                    </div>
                    <div className='order__control' id='load__control'>
                        <button className='order__loadBtn' 
                        onClick={() => setOpenLoadModal(true)}>Load Product</button>
                    </div>
                    <div className='load__products'>{saveProduct !== undefined ? saveProduct.name : null}</div>
                </form>
                <LoadModal open={openLoadModal} changingLoadModal={closeLoadingModal} inputValue={loadingInputValue} loading={loading} />
                <CheckoutModal countProducts={countProducts} open={openCheckoutModal} changingCheckoutModal={closeCheckoutModal} sum={sum()} />
            </div>)
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/checkout' element={<Checkout countProducts={countProducts} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
