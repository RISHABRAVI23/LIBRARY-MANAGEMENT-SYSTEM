import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import BooksList from "./Components/BooksList/BooksList.js";
import SignUp from "./Components/Sign-Up/SignUp";
import SignIn from "./Components/Sign-In/SignIn";
import ViewBook from "./Components/ViewBook/ViewBook";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<br />
				<br />
				<Switch>
					<Route exact path="/" component={BooksList} />
					<Route exact path="/view/:id" component={ViewBook} />
					<Route exact path="/sign-up" component={SignUp} />
					<Route exact path="/sign-in" component={SignIn} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
