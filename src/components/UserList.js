import React, { useState, useEffect } from "react";
import IndividualUser from "./IndividualUser";
import instance from "../axios_config";

function UserList() {
	const [userData, setUserData] = useState([]);

	useEffect(() => {
		instance.get("/getusers")
		.then(res => {
			setUserData(res.data)
		}).catch(err => {
			console.error(err)
		})
	}, []);

	// Mapping userList in user object
	const usersList = userData.map(user => {
		return (
			<div>
				<IndividualUser user={user} />
			</div>
		)
	})

	return (
		<div>
			<h2>User List</h2>
			{usersList}
		</div>
	);
}

export default UserList;
