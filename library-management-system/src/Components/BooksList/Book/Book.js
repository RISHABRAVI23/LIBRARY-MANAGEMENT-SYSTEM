import React from "react";
import "./Book.css";

export default function Book(props) {
	return (
		<div className="book-card">
			<p className="bold-underline">{props.book_name}</p>
			<img src={props.book_image} alt="" className="img" />
			<p className="margin-top">By - {props.book_author}</p>
			<div className="buttons-div">
				<a className="buttons" href="#">
					IDK
				</a>
				<a className="buttons" href="#">
					IDK
				</a>
			</div>
		</div>
	);
}
