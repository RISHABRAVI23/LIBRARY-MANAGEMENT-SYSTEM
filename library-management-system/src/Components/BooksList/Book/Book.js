import React from "react";
import { Link } from "react-router-dom";
import "./Book.css";

export default function Book(props) {
	let card = {
		"width: 18rem;",
	}
	return (
		<div class="card" style={card}>
			
  <img src={`http://localhost:8000${props.book_image}`} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">{props.book_name}</h5>
    <h6 class="card-title">By - {props.book_author}</h6>
    <p class="card-text"></p>
    <Link to={`/view/${props.book_id}`} class="btn btn-primary">View Book</Link>
    <a
					className="btn btn-primary"
					href="http://www.lasesp.com/article/16357757662515460/borrow_book">
					Borrow
				</a>
  			
		</div>
	);
}
