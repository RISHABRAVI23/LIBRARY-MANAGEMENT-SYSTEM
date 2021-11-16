import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import BooksList from "./Components/BooksList/BooksList.js";
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
				</Switch>
			</Router>
		</div>
	);
}

export default App;
