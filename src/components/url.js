export default function Url({
	link,
	shortenLink,
	state,
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
					backgroundColor: !state ? "var(--cyan)" : "var(--dark_violet)",
				}}
			>
				{!state ? "Copy" : "Copied!"}
			</button>
		</div>
	)
}
