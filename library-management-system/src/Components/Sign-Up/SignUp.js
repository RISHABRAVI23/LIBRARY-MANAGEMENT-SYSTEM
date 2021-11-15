import React from "react";
import "./SignUp.css";

export default function SignUp() {
	function submitForm(e) {
		e.preventDefault();
	}
	return (
		<div className="sign-up-container">
			<h1 className="sign-up-heading">
				Sign Up and use now{" "}
				<u>
					<b>FOR FREE</b>
				</u>
			</h1>
			<form className="sign-up-form">
				<div className="input-container">
					<label htmlFor="email" className="animated-label">
						Email Id
					</label>
					<input className="input" type="email" id="email" />
				</div>
				<div className="input-container">
					<label htmlFor="username" className="animated-label">
						Username
					</label>
					<input className="input" type="text" id="username" />
				</div>
				<button type="submit" onClick={submitForm}>
					Sign Up
				</button>
			</form>
		</div>
	);
}
