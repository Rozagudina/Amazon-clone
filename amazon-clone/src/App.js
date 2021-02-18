import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";
import { auth } from "./Firebase";

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
        <Route exact path='/login'>
          <Login/>
        </Route>
			</div>
		</Router>
	);
}

export default App;
