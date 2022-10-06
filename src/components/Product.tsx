import React from 'react';
import data from "./data";
type Props = {
    countProducts: number[]
}

const Product: React.FC<Props> = (props: Props) => {
    const { countProducts } = props;
    const products = data.map((product,i) => {
        const { name, src } = product;
        return (
            countProducts[i] !== 0 ?
                <div className='product' key={i}>
                    <span>{countProducts[i]}</span>
                    <img src={src} alt={name}/>
                </div>
                : null
        );
    });
    return (<>{ products }</>)
};
export default Product;