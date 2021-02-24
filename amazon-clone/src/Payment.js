import React, {useState }from 'react'
import "./Payment.css"
import { useStateValue } from './StateProvider';
import { Link, useHistory } from "react-router-dom";
import Checkout from './Checkout';
import CheckoutProduct from './CheckoutProduct';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
const Payment = () => {
    
    const [{ basket, user }, dispatch] = useStateValue();
    const getBasketTotal = (basket) =>
				basket?.reduce((amount, item) => item.price + amount, 0);
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
     const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");

    const handleSubmit = (e) => { 
        e.preventDefault(); 
        setProcessing(true);
    

    }
    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '');
    }


    return (
			<div className="payment">
				<div className="payment__contener">
					<h1>
						Checkout (<Link to="checkout">{basket?.length}</Link>)items
					</h1>
					<div className="payment__section">
						<div className="payment__title">
							<h3>Delivery address</h3>
						</div>
						<div className="payment__address">
							<p>{user?.email}</p>
							<p>123 React Lane</p>
							<p>Chicago,IL</p>
						</div>
					</div>
					<div className="payment__section">
						<div className="payment__title">
							<h3>Review Items And Delivery</h3>
						</div>
						<div className="payment__items">
							{basket.map((items) => (
								<CheckoutProduct
									id={items.id}
									title={items.title}
									image={items.image}
									price={items.price}
									rating={items.rating}
								/>
							))}
						</div>
					</div>
					<div className="payment__section">
						<div className="payment__title">
							<h3>PaymentMethod</h3>
						</div>
						<div className="payment__details">
							<form onSubmit={handleSubmit}>
								<CardElement onChange={handleChange} />
								<div className="payment__priceContainer">
									<CurrencyFormat
										renderText={(value) => <h3>Order Total: {value}</h3>}
										decimalScale={2}
										value={getBasketTotal(basket)}
										displayType={"text"}
										thousandSeparator={true}
										prefix={"$"}
									/>
									<button disabled={processing || disabled || succeeded}>
										<span>{processing ? <p>Processing</p> : "Buy Now"}</span>
									</button>
								</div>
								{error && <div>{error}</div>}
							</form>
						</div>
					</div>
				</div>
			</div>
		);
}

export default Payment