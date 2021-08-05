import ReactLoading from "react-loading"

export default function LoadingIndicator({ isLoading }) {
	if (!isLoading) return null

	return (
		<div className="loadingIndicatorContainer">
			<ReactLoading
				height={100}
				width={100}
				color="black"
				type="spinningBubbles"
			/>
		</div>
	)
}
