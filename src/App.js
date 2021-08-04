import React from "react"
import Footer from "./components/footer"
import NavBar from "./components/nav_bar"
import LoginDialog from "./dialogs/login_dialog"
import HomePage from "./screens/home_page"
import "./style.css"

export default function App() {
	return (
		<div className="main_container">
			<LoginDialog />
			<NavBar />
			<HomePage />
			<Footer />
		</div>
	)
}
