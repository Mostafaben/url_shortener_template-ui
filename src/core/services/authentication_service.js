import { authenticationReducerTypes } from "../../state/reducers/authentication_reducer"
import { loginDialogReducerTypes } from "../../state/reducers/login_dialog_reducer"
import store from "../../state/store"
import { auth, provider } from "./../firebase"

export function signUp(email, password) {
	return auth.createUserWithEmailAndPassword(email, password).catch(({ message }) => {
		handleLoginError(message)
	})
}

export function login(email, password) {
	return auth.signInWithEmailAndPassword(email, password).catch(({ message }) => {
		handleLoginError(message)
	})
}

export function loginWithGoogle() {
	auth.signInWithPopup(provider).catch(({ message }) => {
		handleLoginError(message)
	})
}

export function logout() {
	auth
		.signOut()
		.then(() => {
			store.dispatch({ type: authenticationReducerTypes.LOGOUT })
		})
		.catch(({ message }) => {
			handleLoginError(message)
		})
}

export function isLoggedIn() {
	const { authenticationReducer: user } = store.getState()
	return user
}

function handleLoginError(message) {
	store.dispatch({ type: loginDialogReducerTypes.STOP_LOADING })
	store.dispatch({ type: authenticationReducerTypes.CLEAR })
	alert(message)
}
