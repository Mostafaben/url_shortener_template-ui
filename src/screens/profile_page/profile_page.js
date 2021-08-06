import React from "react"
import { useSelector } from "react-redux"
import style from "./profile_page.module.css"
import LoadingIndicator from "./../../components/loading_indicator"

export default function ProfilePage() {
	const user = useSelector((state) => state.authenticationReducer)
	if (!user) {
		return <LoadingIndicator isLoading fullScreen />
	}

	return (
		<div className={style.mainContainer}>
			<div className={style.profileContainer}>
				<p>{user.displayName}</p>
				<img src={user.photoURL} />
				<span>{user.phoneNumber}</span>
			</div>
		</div>
	)
}
