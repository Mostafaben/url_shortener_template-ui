import { useDispatch, useSelector } from "react-redux"
import { loginDialogReducerTypes } from "../state/reducers/login_dialog_reducer"

export default function NavBar() {
	// const isLoginDialogShown = useSelector(state => state.loginDialogReducer)
	const dispatch = useDispatch()

	function openLoginDialog() {
		dispatch({ type: loginDialogReducerTypes.SHOW })
	}

	return (
		<nav>
			<h1>Shortly</h1>
			<ul>
				<li>Features</li>
				<li>Pricing</li>
				<li>Resources</li>
			</ul>
			<button className="login" onClick={openLoginDialog}>
				Login
			</button>
			<button className="green_button" onClick={openLoginDialog}>
				Sign Up
			</button>
		</nav>
	)
}
