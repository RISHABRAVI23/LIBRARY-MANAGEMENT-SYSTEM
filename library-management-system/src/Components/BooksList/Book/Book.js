import React from "react";
import { Link } from "react-router-dom";
import "./Book.css";

export default function Book(props) {
	return (
		<div className="book-card">
			<p className="bold-underline">{props.book_name}</p>
			<img
				src={`http://localhost:8000${props.book_image}`}
				alt=""
				className="img"
			/>
			<p className="margin-top">By - {props.book_author}</p>
			<div className="buttons-div">
				<Link className="buttons" to={`/view/${props.book_id}`}>
					View Info
				</Link>
				<a
					className="buttons"
					href="http://www.lasesp.com/article/16357757662515460/borrow_book">
					Borrow
				</a>
			</div>
		</div>
	);
}
