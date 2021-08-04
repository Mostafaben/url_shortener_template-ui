import {
	FacebookFilled,
	InstagramFilled,
	GithubFilled,
	LinkedinFilled,
} from "@ant-design/icons"
import { useDispatch } from "react-redux"
import { loginDialogReducerTypes } from "../state/reducers/login_dialog_reducer"

export default function Footer() {
	const dispatch = useDispatch()

	function openLoginDialog() {
		dispatch({ type: loginDialogReducerTypes.SHOW })
	}

	return (
		<footer>
			<div className="get_started">
				<h1>Boost your links Today</h1>
				<button className="green_button" onClick={openLoginDialog}>
					Get Started
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
