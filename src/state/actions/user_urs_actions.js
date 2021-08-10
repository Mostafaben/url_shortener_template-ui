import { UserUrlsReducerTypes } from "../reducers/user_urls_reducer"

const { SET, DELETE, ADD } = UserUrlsReducerTypes

export function addUserUrlAction(data) {
	return {
		type: ADD,
		payload: data,
	}
}

export function deleteUserUrlAction(id) {
	return {
		type: DELETE,
		payload: {
			id,
		},
	}
}

export function setUrlsAction(urls) {
	return {
		type: SET,
		payload: urls,
	}
}
