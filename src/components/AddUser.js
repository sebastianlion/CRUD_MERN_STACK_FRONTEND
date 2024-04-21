import React, { useState } from "react";
import uniqid from "uniqid";
import instance from "../axios_config";
import Swal from "sweetalert2";

// Css
import "../styles/addUser.css";
import { useNavigate } from "react-router-dom";

function AddUser() {
	// Hooks
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	const navigate = useNavigate();

	function addUser() {
		const user = {
			name: name,
			email: email,
			phone: phone,
			userId: uniqid(),
		};

		instance
			.post("/adduser", user)
			.then((res) => {
				console.log(res.data);
				Swal.fire({
					title: "Good job!",
					text: "The user has been added correctly",
					icon: "success",
				});
				navigate("/");
			})
			.catch((err) => {
				console.error(err);
			});
	}

	return (
		<div className="container">
			<div className="form__row">
				<h2>Create a new user</h2>
			</div>
			<div className="form__row">
				<div className="form__colum">
					<div className="form__item">
						<label htmlFor="name" className="form__label">
							Name
						</label>
						<br />
						<input
							type="text"
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
							className="form__input"
						/>
					</div>
					<div className="form__item">
						<label htmlFor="email" className="form__label">
							Email
						</label>
						<br />
						<input
							type="email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							className="form__input"
						/>
					</div>
					<div className="form__item">
						<label htmlFor="phone" className="form__label">
							Phone
						</label>
						<br />
						<input
							type="number"
							value={phone}
							onChange={(e) => {
								setPhone(e.target.value);
							}}
							className="form__input"
						/>
					</div>
					<button className="form__button" onClick={addUser}>
						Save user
					</button>
				</div>
			</div>
		</div>
	);
}

export default AddUser;
