import React from "react";
import "./Home.css";
import Product from './Product'
const Home=()=> {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt=""
				/>
				<div className="home__row">
					<Product
						id="49538094"
						title="Canon EOS R6 Full-Frame Mirrorless Camera + RF24-105mm F4-7.1 is STM Lens Kit, Black (4082C022)
                        Visit the Canon Store"
						price={(2799.0)}
						rating={5}
						
						image="https://images-na.ssl-images-amazon.com/images/I/81VZhWiI9FL._AC_SL1500_.jpg"
						
					/>

					<Product
						id="12321341"
						title="Google - Pixel 3a with 64GB Memory Cell Phone (Unlocked) - Just Black
                          Visit the Google Store"
						price={339}
						rating={5}
					
						image="https://images-na.ssl-images-amazon.com/images/I/81T-FKC695L._AC_SX679_.jpg"
						
					/>
				</div>
				<div className="home__row">
					<Product
						id="23445930"
						title="Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 40 Hours of Listening Time, Built-in Microphone - Black (Latest Model)
                        Visit the Beats Store"
						price={135}
						rating={4}
						
						image="https://images-na.ssl-images-amazon.com/images/I/51QxA-98Q%2BL._AC_SX342_.jpg"
						
					/>
					<Product
						id="25896584"
						title="10'' Ring Light with 50'' Extendable Tripod Stand, Sensyne LED Circle Lights with Phone Holder for Live Stream/Makeup/YouTube Video/TikTok, Compatible with All Phones."
						price={36.98}
						rating={5}
						
						image="https://images-na.ssl-images-amazon.com/images/I/51yb9yuvqJL._AC_SL1000_.jpg"
						
					/>
					<Product
						id="78956425"
						title="Samsung Galaxy Watch Active 2  (44mm, GPS, Bluetooth) Smart Watch with Advanced Health monitoring, Fitness Tracking , and Long lasting Battery, Aqua Black  (US Version)"
						price={219.0}
						rating={4}
						
						image="https://images-na.ssl-images-amazon.com/images/I/51G8gR4wGFL._AC_SL1024_.jpg"
						
					/>
				</div>
				<div className="home__row">
					<Product
						id="2365489"
						title="Tribesigns Lift Top Coffee Table with Hidden Storage Compartment and Lower Shelf for Living Room, Solid Wood Legs (Black Walnut)"
						price={149.98}
						rating={4}
						
						image="https://images-na.ssl-images-amazon.com/images/I/61%2BPvCYYNyL._AC_SL1001_.jpg"
						
					/>
					
				</div>

			</div>
		</div>
	);
}

export default Home;

