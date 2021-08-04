import React from "react"
import { useDispatch } from "react-redux"
import sweetAlert from "sweetalert2"
import Url from "./../components/url"
import UrlShorter from "./../components/url_shorter"
import { loginDialogReducerTypes } from "./../state/reducers/login_dialog_reducer"

export default function HomePage() {
	const [urls, setUrls] = React.useState([])
	const dispatch = useDispatch()

	function updateUrlState(index) {
		let new_urls = [...urls]
		new_urls[index].state = !new_urls[index].state
		setUrls([...new_urls])
	}

	function openLoginDialog() {
		dispatch({ type: loginDialogReducerTypes.SHOW })
	}

	function addNewUrl(newUrl) {
		if (newUrl.link.length > 0) {
			let new_urls = [...urls]
			new_urls.unshift(newUrl)
			setUrls([...new_urls])
			sweetAlert.fire({
				title: "Success",
				text: "Url shorten successfully",
				icon: "success",
			})
		} else {
			sweetAlert.fire({
				title: "error",
				text: "must have a valid link",
				icon: "error",
			})
		}
	}

	return (
		<div>
			<div className="landing_section wrapper">
				<h1>
					More than just <br /> shorter links
				</h1>
				<p>
					Build your brand's recognition and get detailed <br /> insights on how
					your links are performing
				</p>
				<button className="green_button" onClick={openLoginDialog}>
					Get Started
				</button>
			</div>
			<div className="shorter_section">
				<div className="shorter_wrapper wrapper">
					<UrlShorter confirm={addNewUrl} />
					<div className="results">
						{urls.map(({ link, shortenLink, state }, index) => (
							<Url
								key={link + index}
								link={link}
								shortenLink={shortenLink}
								state={state}
								updateState={() => updateUrlState(index)}
								animate={index == 0 ? true : false}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
