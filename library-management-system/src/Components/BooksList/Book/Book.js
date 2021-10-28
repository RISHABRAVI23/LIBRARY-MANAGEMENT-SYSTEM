import React from "react";
import { Link } from "react-router-dom";
import "./Book.css";

export default function Book(props) {
	return (
		<div className="book-card">
			<p className="bold-underline">{props.book_name}</p>
			<img src={props.book_image} alt="" className="img" />
			<p className="margin-top">By - {props.book_author}</p>
			<div className="buttons-div">
				<Link className="buttons" href="#">
					IDK
				</Link>
				<a className="buttons" href="https://youtu.be/iik25wqIuFo">
					IDK
				</a>
			</div>
		</div>
	);
}
