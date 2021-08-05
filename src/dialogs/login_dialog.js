import React from "react"
import { useDispatch, useSelector } from "react-redux"
import LoadingIndicator from "../components/loading_indicator"
import { login } from "../core/services/authentication_service"
import { loginDialogReducerTypes } from "../state/reducers/login_dialog_reducer"
import style from "./../assets/styles/dialogs.module.css"

export default function LoginDialog() {
	const isShown = useSelector((state) => state.loginDialogReducer)
	const dispatch = useDispatch()
	const wrapperRef = React.useRef()
	const dialogRef = React.useRef()
	const emailRef = React.useRef()
	const passwordRef = React.useRef()
	const [isLoading, setIsLoading] = React.useState(false)

	function closeDialog() {
		dialogRef.current.classList.remove(style.openAnimation)
		dialogRef.current.classList.add(style.closeAnimation)
		setTimeout(() => {
			dispatch({ type: loginDialogReducerTypes.HIDE })
		}, 400)
	}

	function handleWrapperClick(e) {
		if (e.target == wrapperRef.current) closeDialog()
	}

	function submitForm(e) {
		e.preventDefault()
		setIsLoading(true)
		const { value: email } = emailRef.current
		const { value: password } = passwordRef.current
		login(email, password)
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
				<LoadingIndicator isLoading={isLoading} />
				<form className={style.content} onSubmit={submitForm}>
					<i className="fas fa-times" onClick={closeDialog}></i>
					<h2>Welcome Back,</h2>
					<span>Sign to continue</span>
					<input
						ref={emailRef}
						placeholder="email"
						type="email"
						required
						className="form-control"
					/>
					<input
						ref={passwordRef}
						placeholder="**********"
						type="password"
						className="form-control"
						required
						minLength={8}
					/>
					<button type="submit" className={style.loginBtn} disabled={isLoading}>
						Sign in
					</button>
					<span style={{ marginLeft: "auto" }}>Forget password ?</span>
					<button className={style.googleLogin} type="button">
						Sign in with Google
					</button>
				</form>
			</div>
		</div>
	) : null
}
