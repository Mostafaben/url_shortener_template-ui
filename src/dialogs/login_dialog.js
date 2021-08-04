import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginDialogReducerTypes } from "../state/reducers/login_dialog_reducer"
import style from "./../assets/styles/dialogs.module.css"

export default function LoginDialog() {
	const isShown = useSelector((state) => state.loginDialogReducer)
	const dispatch = useDispatch()
	const wrapperRef = React.useRef()
	const dialogRef = React.useRef()

	function closeDialog() {
		dialogRef.current.classList.remove(style.openAnimation)
		dialogRef.current.classList.add(style.closeAnimation)
		setTimeout(() => {
			dispatch({ type: loginDialogReducerTypes.HIDE })
		}, 300)
	}

	function handleWrapperClick(e) {
		if (e.target == wrapperRef.current) closeDialog()
	}

	return isShown ? (
		<div
			className={style.loginDialogWrapper}
			ref={wrapperRef}
			onClick={handleWrapperClick}
		>
			<div
				ref={dialogRef}
				className={`${style.loginDialogContainer} ${style.openAnimation}`}
			>
				<i className="fas fa-times" onClick={closeDialog}></i>
			</div>
		</div>
	) : null
}
