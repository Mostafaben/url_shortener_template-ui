import React from "react"
import { shortenLink } from "../core/services/url_service"
export default function UrlShorter() {
	const inputRef = React.useRef()

	function addNewUrl(e) {
		e.preventDefault()
		const value = inputRef.current.value
		shortenLink(value)
		inputRef.current.value = ""
	}

	return (
		<form className="shorter_container" onSubmit={addNewUrl}>
			<input
				type="url"
				placeholder="Shorten a link here..."
				ref={inputRef}
				required
				minLength={10}
			/>
			<button type="submit" className="green_button">
				Shorten it!
			</button>
		</form>
	)
}
