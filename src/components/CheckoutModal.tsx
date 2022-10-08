import {
    FC,
    MouseEventHandler,
    useEffect,
    useState
} from "react";
import { Link } from "react-router-dom";
import data from "./data";

type Props = {
    countProducts: number[],
    open: boolean,
    sum: string
    changingCheckoutModal: MouseEventHandler<HTMLButtonElement>,
}

const CheckoutModal: FC<Props> = (props) => {
    let { countProducts, open, changingCheckoutModal, sum } = props;

    const [openModal, setOpenModal] = useState<boolean>(false);
    useEffect(() => {
        setOpenModal(open);
    })
    useEffect(() => {
        return () => {
            setOpenModal(false);
        }
    })



    return (
        <div className='wrap' style={{ height: openModal ? '100%' : '0' }}>
            <div className='checkoutModal'>
                <h2>Your Order</h2>
                <p>The pizza has the following ingredients</p>
                <ul>
                    {data.map((product, i) =>
                        countProducts[i] !== 0 ?
                            <li key={i}>
                                <p>{product.name}: {countProducts[i]}</p>
                            </li> : null
                    )}
                </ul>
                <h2>Total price: {sum}$</h2>
                <p className='checkoutModal__warning'>Continue to checkout?</p>
                <div className='checkoutModal__control'>
                    <button className='checkoutModal__cancel' onClick={changingCheckoutModal}>Cancel</button>
                    <Link to='/checkout' className='checkoutModal__continue'>Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default CheckoutModal;