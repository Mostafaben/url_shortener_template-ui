import ReactLoading from "react-loading"

export default function LoadingIndicator({ isLoading, fullScreen }) {
	if (!isLoading) return null

	return (
		<div className={`loadingIndicatorContainer ${fullScreen ? "fullScreen" : ""}`}>
			<ReactLoading height={100} width={100} color="black" type="spinningBubbles" />
		</div>
	)
}
