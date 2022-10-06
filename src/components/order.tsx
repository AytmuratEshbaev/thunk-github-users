import React, {FC, MouseEventHandler} from "react";
import data from "./data";

type Props = {
    countProducts: number[],
    setCountProducts: MouseEventHandler<HTMLButtonElement>
}

const Order: FC<Props> = (props) => {
    const { countProducts, setCountProducts } = props;
    return (
        <div className='order'>
            {data.map((product, i) =>
                <div className='order__product' key={i}>
                    <div className='order__productInfo'>
                        <p className='order__productName'>{product.name}</p>
                        <p className='order__productPrice'>{product.price}$</p>
                    </div>
                    <div className='order__productControl'>
                        <button value='-1' onClick={setCountProducts} data-index={i}>-</button>
                        <input type='text' value={countProducts[i]} readOnly={true}/>
                        <button value='1' onClick={setCountProducts} data-index={i}>+</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Order;