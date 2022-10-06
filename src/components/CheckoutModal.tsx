import React, {FC, useRef} from "react";
import data from "./data";

// type Props = {
//     countProducts: number[]
// }
//
// const CheckoutModal:FC<Props> = (props) => {
//     let {countProducts} = props;
//     let checkoutRef = useRef() as React.MutableRefObject<HTMLDivElement>;
//     const cancel = (e:React.MouseEvent<HTMLButtonElement>): void => {
//         e.preventDefault()
//         let element = checkoutRef.current;
//         if(element !== null) element.style.height = '0%';
//     }
//     return(
//         <div className='wrap' ref={checkoutRef}>
//             <div className='checkoutModal'>
//                 <h2>Your Order</h2>
//                 <p>The pizza has the following ingredients</p>
//                 <ul>
//                     {data.map((product,i) =>
//                         countProducts[i] !== 0 ?
//                         <li key={i}>
//                             <p>{product.name}: {countProducts[i]}</p>
//                         </li>: null
//                     )}
//                 </ul>
//                 <h2>Total price: 10.50$</h2>
//                 <p className='checkoutModal__warning'>Continue to checkout</p>
//                 <div className='checkoutModal__control'>
//                     <button className='checkoutModal__cancel'>Cancel</button>
//                     <button className='checkoutModal__continue' onClick={cancel}>Continue</button>
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// export default CheckoutModal;