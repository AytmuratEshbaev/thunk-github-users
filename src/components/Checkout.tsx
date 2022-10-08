import React, { FC } from "react";
import { Link } from 'react-router-dom';
import Product from "./Product";

type Props = {
    countProducts: number[]
}

const Checkout: FC<Props> = (props) => {
    const { countProducts } = props;

    const submit = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        alert('Submitted');
    }
    return (
        <div className="checkout">
            <nav>
                <Link to='/'>Back</Link>
            </nav>
            <div className="ingredients">
                <div className="info">
                    <h1>Checkout info:</h1>
                    <form>
                        <div className="input_group">
                            <label>Name:</label>
                            <input type="text" />
                        </div>
                        <div className="input_group">
                            <label>Email:</label>
                            <input type="email" />
                        </div>
                        <div className="input_group">
                            <label>Choose delivery method:</label>
                            <select>
                                <option>Delivery</option>
                                <option>Local popup</option>
                            </select>
                        </div>
                        <div className="input_group">
                            <label>Additional notes:</label>
                            <textarea cols={30} rows={2}></textarea>
                        </div>
                        <div className="input_group">
                            <label>Are you regular client?</label>
                            <p>
                                <input type="radio" name="client" id="yes" />
                                <label htmlFor="yes">Yes</label>
                                <input type="radio" name="client" id="no" />
                                <label htmlFor="no">No</label>
                            </p>
                        </div>
                        <div className="input_group">
                            <label>Do you have a coupon code:</label>
                            <p><input type="checkbox" name="couponCode" /></p>
                        </div>
                        <div className="input_group">
                            <label>Coupon</label>
                            <input type="text" placeholder="Coupon code" />
                        </div>
                        <div className="input_group">
                            <input type="reset" value="Reset" />
                            <input type="submit" value="Submit" onClick={submit} />
                        </div>
                    </form>
                </div>
                <div className="ingredient">
                    <h1>Ingredient info</h1>
                    <Product countProducts={countProducts} />
                </div>
            </div>

        </div>
    )
}

export default Checkout;
