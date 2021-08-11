import { FacebookFilled, GithubFilled, InstagramFilled, LinkedinFilled } from "@ant-design/icons"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { loginDialogReducerTypes } from "../state/reducers/login_dialog_reducer"

export default function Footer() {
	const dispatch = useDispatch()
	const user = useSelector((state) => state.authenticationReducer)
	const history = useHistory()
	function openLoginDialog() {
		if (!user.email) {
			dispatch({ type: loginDialogReducerTypes.SHOW })
		} else {
			history.push("/profile")
			window.scrollTo({ top: 0 })
		}
	}

	return (
		<footer>
			<div className="get_started">
				<h1>Boost your links Today</h1>
				<button className="green_button" onClick={openLoginDialog}>
					{!user ? "Get Started" : "Go to profile"}
				</button>
			</div>
			<div className="content row">
				<div className="col col-12 col-md-6 col-lg-6">
					<p>Shortly</p>
				</div>
				<div className="col col-12 col-md-6 col-lg-6">
					<div className="icons">
						<FacebookFilled className="icon" />
						<InstagramFilled className="icon" />
						<GithubFilled className="icon" />
						<LinkedinFilled className="icon" />
					</div>
				</div>
			</div>
		</footer>
	)
}
