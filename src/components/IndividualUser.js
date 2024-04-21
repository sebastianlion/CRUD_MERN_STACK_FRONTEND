import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import instance from "../axios_config";
import AOS from "aos";
import Swal from "sweetalert2";
import "aos/dist/aos.css";

import "../styles/individualUser.css";

function IndividualUser({ user }) {
	// Animation flip-right
	useEffect(() => {
		AOS.init();
	}, []);

	const navigate = useNavigate();
	//Function to delete an user

	function updateUser() {
		Swal.fire({
			title: "¡Warning!",
			showDenyButton: true,
			text: "¿Do you want to update this user?",
			icon: "question",
		}).then((result) => {
			if (result.isConfirmed) {
				navigate(`/updateuser/${user.userId}`);
			}
		});
	}

	function deleteUser(userId) {
		Swal.fire({
			title: "¡Warning!",
			showDenyButton: true,
			text: "¿Do you want to delete this user?",
			icon: "warning",
		}).then((result) => {
			if (result.isConfirmed) {
				instance
					.post("/deleteuser", { userId: userId })
					.then((res) => {
						console.log(res.data);
						navigate(0);
					})
					.catch((err) => {
						console.error(err);
					});
			}
		});
	}

	return (
		<div className="table">
			<div className="table__row" data-aos="flip-right">
				<ul className="table__list">
					<li className="table__item">{user.userId}</li>
					<li className="table__item">{user.name}</li>
					<li className="table__item">{user.email}</li>
					<li className="table__item">{user.phone}</li>
				</ul>
				<button
					className="table__button table__button--update"
					onClick={() => {
						updateUser();
					}}
				>
					Update
				</button>
				<button
					className="table__button table__button--delete"
					onClick={() => {
						deleteUser(user.userId);
					}}
				>
					Delete
				</button>
				<hr></hr>
			</div>
		</div>
	);
}

export default IndividualUser;
