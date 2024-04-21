import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import instance from "../axios_config";
import Swal from "sweetalert2";

function UpdateUser() {
	const params = useParams();

	// Hooks
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	useEffect(() => {
		instance.post("/getuser", { userId: params.userId }).then((res) => {
			console.log(res.data[0]);
			const userData = res.data[0];
			setName(userData.name);
			setEmail(userData.email);
			setPhone(userData.phone);
		});
	}, []);

	const navigate = useNavigate();

	// Edit function
	function editUser() {
		const updateUser = {
			name: name,
			email: email,
			phone: phone,
			userId: params.userId,
		};

		instance
			.post("/updateuser", updateUser)
			.then((res) => {
				console.log(res.data);
				Swal.fire({
					title: "Good job!",
					text: "The user has been updated correctly",
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
				<h2>Edit user</h2>
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
							type="text"
							value={phone}
							onChange={(e) => {
								setPhone(e.target.value);
							}}
							className="form__input"
						/>
					</div>
					<button className="form__button" onClick={editUser}>
						Update user
					</button>
				</div>
			</div>
		</div>
	);
}

export default UpdateUser;
