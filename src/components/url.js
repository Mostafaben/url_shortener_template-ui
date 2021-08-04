export default function Url({
	link,
	shortenLink,
	isCopied,
	updateState,
	animate,
}) {
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
					backgroundColor: !isCopied ? "var(--cyan)" : "var(--dark_violet)",
				}}
			>
				{!isCopied ? "Copy" : "Copied!"}
			</button>
		</div>
	)
}
