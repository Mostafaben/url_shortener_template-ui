export default function Url({ link, shortenLink, isCopied, updateState, animate }) {
	return (
		<div className="url_container" style={{ animationName: animate ? "addNewUrl" : "none" }}>
			<span>{link}</span>
			<span style={{ color: "var(--cyan)" }}>{shortenLink}</span>
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
