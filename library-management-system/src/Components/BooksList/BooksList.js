import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BooksList.css";
import Book from "./Book/Book";

export default function BooksList() {
	const [BooksList, setBooksList] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:8000/books/get")
			.then((response) => {
				setBooksList(response.data);
			})
			.catch((error) => console.error(error));
		return () => {};
	}, []);
	return (
		<div className="books-container">
			{BooksList.map((book, i) => {
				return (
					<Book
						key={i}
						book_id={book.book_id}
						book_name={book.book_name}
						book_author={book.book_author}
						book_desc={book.book_desc}
						borrowed={book.borrowed}
						book_image={book.book_image}
					/>
				);
			})}
		</div>
	);
}
