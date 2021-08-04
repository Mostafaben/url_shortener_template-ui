import React from "react"
export default function UrlShorter({ confirm }) {
	const input = React.useRef(null)

	function addNewUrl() {
		const value = input.current.value
		confirm({
			link: value,
			shortenLink: `https://regi.ink/k${Math.floor(Math.random() * 1000)}`,
		})
		input.current.value = ""
	}

	return (
		<div className="shorter_container">
			<input type="text" placeholder="Shorten a link here..." ref={input} />
			<button className="green_button" onClick={addNewUrl}>
				Shorten it!
			</button>
		</div>
	)
}
