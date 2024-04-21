import "./App.css";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
	return (
		<div className="App">
			<NavBar />

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<UserList />} exact></Route>
					<Route path="/adduser" element={<AddUser />} exact></Route>
					<Route path="/updateuser/:userId" element={<UpdateUser />} exact></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
