import React from "react"
import { useDispatch } from "react-redux"
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import Footer from "./components/footer"
import NavBar from "./components/nav_bar"
import PageLoading from "./components/page_loading"
import { auth } from "./core/firebase"
import LoginDialog from "./dialogs/login_dialog"
import HomePage from "./screens/home_page/home_page"
import ProfilePage from "./screens/profile_page/profile_page"
import { authenticationLoginAction } from "./state/actions/authentication_actions"
import { loginDialogReducerTypes } from "./state/reducers/login_dialog_reducer"
import "./style.css"

export default function App() {
	const dispatch = useDispatch()

	React.useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(
			(user) => {
				if (user) {
					dispatch(authenticationLoginAction(user))
				}
				dispatch({ type: loginDialogReducerTypes.HIDE })
				dispatch({ type: loginDialogReducerTypes.STOP_LOADING })
			},
			(error) => {
				alert(error.message)
			}
		)
		return unsubscribe
	}, [])

	return (
		<Router>
			<div className="main_container">
				<PageLoading />
				<LoginDialog />
				<NavBar />
				<Switch>
					<Route path="/" exact>
						<HomePage />
					</Route>
					<Route path="/profile" exact>
						<ProfilePage />
					</Route>
					<Route path="**">
						<Redirect to="/" />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	)
}
