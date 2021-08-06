import React from "react"
import { useDispatch, useSelector } from "react-redux"
import LoadingIndicator from "../components/loading_indicator"
import {
	login,
	signUp,
	loginWithGoogle as loginWithPopUp,
} from "../core/services/authentication_service"
import { loginDialogReducerTypes } from "../state/reducers/login_dialog_reducer"
import style from "./../assets/styles/dialogs.module.css"

export default function LoginDialog() {
	const state = useSelector((state) => state.loginDialogReducer)
	const [isLogin, setIsLogin] = React.useState(true)
	const dispatch = useDispatch()
	const wrapperRef = React.useRef()
	const dialogRef = React.useRef()
	const emailRef = React.useRef()
	const passwordRef = React.useRef()
	const passwordConfirmationRef = React.useRef()

	function changeForm() {
		setIsLogin(!isLogin)
	}

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
		dispatch({ type: loginDialogReducerTypes.START_LOADING })
		const { value: email } = emailRef.current
		const { value: password } = passwordRef.current
		if (isLogin) {
			login(email, password)
		} else {
			const { value: passwordConfirmation } = passwordConfirmationRef.current
			if (password != passwordConfirmation)
				return dispatch({ type: loginDialogReducerTypes.STOP_LOADING })
			signUp(email, password)
		}
	}
	function loginWithGoogle() {
		loginWithPopUp()
	}

	return state.isShown ? (
		<div className={style.loginDialogWrapper} ref={wrapperRef} onClick={handleWrapperClick}>
			<div ref={dialogRef} className={`${style.loginDialogContainer} ${style.openAnimation}`}>
				<LoadingIndicator isLoading={state.isLoading} />
				<form className={style.content} onSubmit={submitForm}>
					<i className="fas fa-times" onClick={closeDialog}></i>
					<h2>{isLogin ? "Welcome Back," : "Create Account,"}</h2>
					<span>Sign to continue</span>
					<input
						ref={emailRef}
						placeholder="email"
						type="email"
						required
						className="form-control"
						name="email"
					/>
					<input
						ref={passwordRef}
						placeholder="password"
						type="password"
						className="form-control"
						required
						minLength={8}
						name="password"
					/>
					{isLogin ? null : (
						<input
							ref={passwordConfirmationRef}
							placeholder="password confirmation"
							type="password"
							className="form-control"
							required
							minLength={8}
							name="password_confirmation"
						/>
					)}
					<button type="submit" className={style.loginBtn} disabled={state.isLoading}>
						{isLogin ? "Sign in" : "Create account"}
					</button>

					<span style={{ marginLeft: "auto" }}>Forget password ?</span>
					<p
						style={{ color: "#59c3ee", fontSize: "14px", fontWeight: "lighter", cursor: "pointer" }}
						onClick={changeForm}
					>
						{isLogin ? "Create account" : "Already have an account"}
					</p>
					<button className={style.googleLogin} type="button" onClick={loginWithGoogle}>
						{isLogin ? "Sign in with Google" : "Sign up with Google"}
					</button>
				</form>
			</div>
		</div>
	) : null
}
