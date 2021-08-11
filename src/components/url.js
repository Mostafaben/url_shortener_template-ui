import { urlHost } from "../core/environment"

export default function Url({ link, shortenLink, isCopied, updateState, animate }) {
	return (
		<div className="url_container" style={{ animationName: animate ? "addNewUrl" : "none" }}>
			<p>
				Shorten Link:
				<a style={{ color: "var(--cyan)", marginLeft: "20px" }} href={urlHost + "" + shortenLink}>
					{urlHost + "" + shortenLink}
				</a>
			</p>
			<button
				className="btn"
				onClick={updateState}
				style={{
					backgroundColor: !isCopied ? "var(--cyan)" : "var(--dark_violet)",
				}}
			>
				{!isCopied ? "Copy" : "Copied!"}
			</button>
		</div>
	)
}
