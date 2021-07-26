import React from "react"
import "./style.css"
import {
	FacebookFilled,
	InstagramFilled,
	GithubFilled,
	LinkedinFilled,
} from "@ant-design/icons"

import sweetAlert from "sweetalert2"

export default function App() {
	const [urls, setUrls] = React.useState([])

	function updateUrlState(index) {
		let new_urls = [...urls]
		new_urls[index].state = !new_urls[index].state
		setUrls([...new_urls])
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
		<div className="main_container">
			<NavBar />
			<div className="landing_section wrapper">
				<h1>
					More than just <br /> shorter links
				</h1>
				<p>
					Build your brand's recognition and get detailed <br />{" "}
					insights on how your links are performing
				</p>
				<button className="green_button">Get Started</button>
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
			<Footer />
		</div>
	)
}

function NavBar() {
	return (
		<nav>
			<h1>Shortly</h1>
			<ul>
				<li>Features</li>
				<li>Pricing</li>
				<li>Resources</li>
			</ul>
			<button className="login">Login</button>
			<button className="green_button">Sign Up</button>
		</nav>
	)
}

function UrlShorter({ confirm }) {
	const input = React.useRef(null)

	function addNewUrl() {
		const value = input.current.value
		confirm({
			link: value,
			shortenLink: `https://regi.ink/k${Math.floor(
				Math.random() * 1000
			)}`,
			state: false,
		})
		input.current.value = ""
	}

	return (
		<div className="shorter_container">
			<input
				type="text"
				placeholder="Shorten a link here..."
				ref={input}
			/>
			<button className="green_button" onClick={addNewUrl}>
				Shorten it!
			</button>
		</div>
	)
}

function Url({ link, shortenLink, state, updateState, animate }) {
	return (
		<div
			className="url_container"
			style={{ animationName: animate ? "addNewUrl" : "none" }}
		>
			<p>{link}</p>
			<p style={{ color: "var(--cyan)" }}>{shortenLink}</p>
			<button
				className="btn"
				onClick={updateState}
				style={{
					backgroundColor: !state
						? "var(--cyan)"
						: "var(--dark_violet)",
				}}
			>
				{!state ? "Copy" : "Copied!"}
			</button>
		</div>
	)
}

function Footer() {
	return (
		<footer>
			<div className="get_started">
				<h1>Boost your links Today</h1>
				<button className="green_button">Get Started</button>
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
