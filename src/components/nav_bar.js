import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginDialogReducerTypes } from "../state/reducers/login_dialog_reducer"

export default function NavBar() {
	const dispatch = useDispatch()
	const sideMenuRef = React.useRef()
	const [isMenuOpen, setIsMenuOpen] = React.useState(false)

	function openLoginDialog() {
		if (isMenuOpen) {
			closeSideMenu()
		}
		dispatch({ type: loginDialogReducerTypes.SHOW })
	}
	function openSideMenu() {
		setIsMenuOpen(true)
	}
	function closeSideMenu() {
		sideMenuRef.current.classList.remove("openAnimation")
		sideMenuRef.current.classList.add("closeAnimation")
		setTimeout(() => {
			setIsMenuOpen(false)
		}, 400)
	}

	return (
		<nav>
			<h3>Shortly</h3>
			<ul className="links">
				<li>Features</li>
				<li>Pricing</li>
				<li>Resources</li>
			</ul>
			<button className="navBtn login" onClick={openLoginDialog}>
				Login
			</button>
			<button className="navBtn green_button" onClick={openLoginDialog}>
				Sign Up
			</button>
			<i className="fas fa-bars" onClick={openSideMenu}></i>

			{isMenuOpen ? (
				<div className="sideMenu openAnimation" ref={sideMenuRef}>
					<i className="fas fa-times" onClick={closeSideMenu}></i>
					<ul>
						<li>Features</li>
						<li>Pricing</li>
						<li>Resources</li>
					</ul>
					<button className="green_button" onClick={openLoginDialog}>
						Login
					</button>
				</div>
			) : null}
		</nav>
	)
}
