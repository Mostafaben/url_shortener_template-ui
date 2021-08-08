import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { logout } from "../core/services/authentication_service"
import { loginDialogReducerTypes } from "../state/reducers/login_dialog_reducer"

export default function NavBar() {
	const dispatch = useDispatch()
	const user = useSelector((state) => state.authenticationReducer)
	const sideMenuRef = React.useRef()
	const history = useHistory()
	const [isMenuOpen, setIsMenuOpen] = React.useState(false)

	function goToProfile() {
		history.push("/profile")
		if (isMenuOpen) {
			closeSideMenu()
		}
	}
	function signOut() {
		logout()
		history.push("/")
	}
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
			<h3 style={{ cursor: "pointer" }} onClick={() => history.push("/")}>
				Shortly
			</h3>
			<ul className="links">
				<li>Features</li>
				<li>Pricing</li>
				<li>Resources</li>
			</ul>
			{!user?.email ? (
				<button className="navBtn login" onClick={openLoginDialog}>
					Login
				</button>
			) : (
				<div className="profileContainer navBtn" onClick={goToProfile}>
					<div>
						<p>{user.displayName}</p>
						<span>{user.email}</span>
					</div>
					<img src={user.photoURL} />
				</div>
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
					{user ? (
						<div className="profileContainer" onClick={goToProfile}>
							<div>
								<p>{user.displayName}</p>
								<span>{user.email}</span>
							</div>
							<img src={user.photoURL} />
							<i className="fas fa-sign-out-alt" onClick={signOut}></i>
						</div>
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
