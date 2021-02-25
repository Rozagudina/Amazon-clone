import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./Firebase";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const promise = loadStripe(
	"pk_test_51IOFcnDlgBr8l3wo7C1eMW7zrMsXLCP4J6jnfTY80nfv34n5oQOzUMtoq6TTMyeRyr1CB1XKqPqpv7FCa8j2tAOa00WjHbqUBl"
);
function App() {
  const [{user}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user:null,
        });
      }
    });
    
  }, []);
	return (
		<Router>
			<div className="App">
				<Route exact path="/">
					<Header />
					<Home />
				</Route>
				<Route exact path="/Checkout">
					<Header />
					<Checkout />
				</Route>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route exact path="/payment">
					<Header />
					<Elements stripe={promise}>
						<Payment />
					</Elements>
				</Route>
			</div>
		</Router>
	);
}

export default App;
