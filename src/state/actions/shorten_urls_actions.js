import { shortenUrlsReducerTypes } from "../reducers/shorten_urls_reducer"

const { ADD, CLEAN, COPY, DELETE } = shortenUrlsReducerTypes

export function addUrlAction(link, shortenLink) {
	return {
		type: ADD,
		payload: {
			link,
			shortenLink,
			isCopied: false,
		},
	}
}

export function deleteUrlAction(id) {
	return {
		type: DELETE,
	}
}

export function cleanUrlsAction() {
	return {
		type: CLEAN,
	}
}

export function copyUrlAction(id) {
	return {
		type: COPY,
		payload: {
			id,
		},
	}
}
