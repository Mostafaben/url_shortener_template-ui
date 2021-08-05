import { authenticationReducerTypes } from "../reducers/authentication_reducer"

export function authenticationLoginAction(user) {
	return {
		type: authenticationReducerTypes.LOGIN,
		payload: {
			user,
		},
	}
}

export function authenticationLogoutAction() {
	return {
		type: authenticationReducerTypes.LOGOUT,
	}
}
