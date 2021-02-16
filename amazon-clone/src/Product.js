import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
// import image from './image.PNG'
	const Product = ({ id, title, price, image, rating }) => {
		const [{ basket }, dispatch] = useStateValue();
		const AddToBasket = () => {
			dispatch({
				type: "ADD_TO_BASKET",
				item: {
					id: id,
					title: title,
					image: image,
					price: price,
					rating:rating,
				},
			});
		};

		return (
			<div className="product">
				<div className="product__info">
					<p>{title}</p>
					<p className="product__price">
						<small>$</small>
						<strong>{price}</strong>
					</p>
					<div className="product__rating">
						{Array(rating)
							.fill()
							.map(() => (
								<p>🌟</p>
							))}
					</div>
				</div>
				<img src={image} alt="image" />
				<button onClick={AddToBasket}>Add to Basket</button>
			</div>
		);
	};

export default Product;