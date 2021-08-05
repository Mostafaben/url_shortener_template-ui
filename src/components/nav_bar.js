import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginDialogReducerTypes } from "../state/reducers/login_dialog_reducer"

export default function NavBar() {
	const dispatch = useDispatch()
	const user = useSelector((state) => state.authenticationReducer)
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
			{!user?.email ? (
				<>
					<button className="navBtn login" onClick={openLoginDialog}>
						Login
					</button>
					<button className="navBtn green_button" onClick={openLoginDialog}>
						Sign Up
					</button>
				</>
			) : (
				<p style={{ marginLeft: "auto" }} className="navBtn">
					{user.email}
				</p>
			)}
			<i className="fas fa-bars" onClick={openSideMenu}></i>

			{isMenuOpen ? (
				<div className="sideMenu openAnimation" ref={sideMenuRef}>
					<i className="fas fa-times" onClick={closeSideMenu}></i>
					<ul>
						<li>Features</li>
						<li>Pricing</li>
						<li>Resources</li>
					</ul>
					{user?.email ? (
						<p
							style={{
								color: "hsl(257, 7%, 63%)",
								marginLeft: 32,
								fontSize: 18,
								borderTop: "1px solid hsl(257, 7%, 63%)",
								width: "70%",
								marginTop: "20px",
								padding: "32px 0px",
							}}
						>
							{user.email}
						</p>
					) : (
						<button className="green_button" onClick={openLoginDialog}>
							Login
						</button>
					)}
				</div>
			) : null}
		</nav>
	)
}
