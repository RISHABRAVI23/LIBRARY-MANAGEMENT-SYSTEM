import React from "react";

export default function Book(props) {
	let cardStyle = {
		width: "18rem",
	};
	let imgStyle = {
		width: "125px",
		height: "180px",
		margin: "auto",
	};
	return (
		<div className="card" style={cardStyle}>
			<a
				href="https://www.tomorrowtides.com/borrow-book.html"
				style={imgStyle}>
				<img
					src={`http://localhost:8000${props.book_image}`}
					className="card-img-top"
					alt="..."
				/>
			</a>
			<div className="card-body">
				<h5 className="card-title">
					<strong>{props.book_name}</strong>
				</h5>
				<p className="card-text">
					By - <strong>{props.book_author}</strong>
				</p>
				<div
					className="container"
					style={{ display: "flex", justifyContent: "space-around" }}>
					<a
						href="https://www.tomorrowtides.com/borrow-book.html"
						className="btn btn-primary">
						View Book
					</a>
					<a
						href="https://www.tomorrowtides.com/borrow-book.html"
						className="btn btn-primary">
						Borrow Book
					</a>
				</div>
			</div>
		</div>
	);
}
