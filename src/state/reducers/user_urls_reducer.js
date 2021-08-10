export const UserUrlsReducerTypes = {
	SET: "user_url/set",
	DELETE: "user_url/remove",
	ADD: "user_url/add",
}

export default function userUrlsReducer(state = [], action) {
	switch (action.type) {
		case UserUrlsReducerTypes.SET:
			return [...action.payload]
		case UserUrlsReducerTypes.ADD:
			return [...state, action.payload]
		case UserUrlsReducerTypes.DELETE:
			return [...state].filter((url) => url.id != action.payload.id)
		default:
			return state
	}
}
