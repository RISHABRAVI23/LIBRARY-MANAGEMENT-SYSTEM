import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import BooksList from "./Components/BooksList/BooksList.js";

function App() {
	return (
		<div className="App">
			<Navbar />
			<br />
			<br />
			<BooksList />
		</div>
	);
}

export default App;
