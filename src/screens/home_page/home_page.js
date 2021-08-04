import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
	openErrorDialog,
	openSuccessDialog,
} from "../../core/services/ui_service"
import {
	addUrlAction,
	copyUrlAction,
} from "../../state/actions/shorten_urls_actions"

import Url from "../../components/url"
import UrlShorter from "../../components/url_shorter"
import { loginDialogReducerTypes } from "../../state/reducers/login_dialog_reducer"

export default function HomePage() {
	const urls = useSelector((state) => state.shortenUrlsReducer)
	const dispatch = useDispatch()

	function updateUrlState(id) {
		dispatch(copyUrlAction(id))
	}

	function openLoginDialog() {
		dispatch({ type: loginDialogReducerTypes.SHOW })
	}

	function addNewUrl({ link, shortenLink }) {
		if (link.length > 0) {
			dispatch(addUrlAction(link, shortenLink))
			openSuccessDialog("url shorten successfully")
		} else {
			openErrorDialog("invalid url format")
		}
	}

	return (
		<div>
			<div className="landing_section wrapper">
				<h1>More than just shorter links</h1>
				<p>
					Build your brand's recognition and get detailed insights on how your
					links are performing
				</p>
				<button className="green_button" onClick={openLoginDialog}>
					Get Started
				</button>
			</div>
			<div className="shorter_section">
				<div className="shorter_wrapper wrapper">
					<UrlShorter confirm={addNewUrl} />
					<div className="results">
						{urls.map(({ link, shortenLink, isCopied, id }, index) => (
							<Url
								key={id}
								link={link}
								shortenLink={shortenLink}
								isCopied={isCopied}
								updateState={() => updateUrlState(id)}
								animate={index == 0 ? true : false}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
