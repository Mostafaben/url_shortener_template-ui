import React from "react"
import style from "./../assets/styles/loading.module.css"
import LoadingIndicator from "react-loading"
import { useSelector } from "react-redux"

const PageLoading = () => {
	const { isFetchingData } = useSelector((state) => state.appReducer)
	if (!isFetchingData) return null
	return (
		<div className={style.mainContainer}>
			<LoadingIndicator
				color="black"
				height={80}
				width={80}
				type="spinningBubbles"
				className={style.loadingIndicator}
			/>
		</div>
	)
}

export default PageLoading
