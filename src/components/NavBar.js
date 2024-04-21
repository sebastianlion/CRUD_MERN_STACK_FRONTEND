import React, { useState } from "react";
import "../styles/navBar.css";

function NavBar() {
	// State to managment the menu's state
	const [openMenu, setOpenMenu] = useState(false);

	// Function to handle the click on the menu's button
	const toogleMenu = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<nav className={`navbar ${openMenu ? "navbar--open" : ""}`}>
			<div className="navbar__brand">
				<span className="navbar__logo">Crud MERN STACK</span>
			</div>
			<ul className="navbar__menu">
				<li className="navbar__item">
					<a className="navbar__link" href="/">
						Start
					</a>
				</li>
				<li className="navbar__item">
					<a className="navbar__link" href="adduser">
						Add User
					</a>
				</li>
			</ul>
			<button className="navbar__button" onClick={toogleMenu}>
				☰
			</button>
		</nav>
	);
}

export default NavBar;
