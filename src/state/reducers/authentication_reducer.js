export const authenticationReducerTypes = {
	LOGIN: "authentication/login",
	LOGOUT: "authentication/logout",
}

export default function authenticationReducer(state = null, action) {
	switch (action.type) {
		case authenticationReducerTypes.LOGIN:
			return { ...action.payload.user }
		case authenticationReducerTypes.LOGOUT:
			return null
		default:
			return state
	}
}
