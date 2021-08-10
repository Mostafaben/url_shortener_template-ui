export const shortenUrlsReducerTypes = {
	ADD: "shorten_urls/add_url",
	DELETE: "shorten_urls/delete_url",
	CLEAN: "shorten_urls/clear_list",
	COPY: "shorten_urls/copy_url",
}

const { ADD, DELETE, SET, CLEAN, COPY } = shortenUrlsReducerTypes

export default function shortenUrlsReducer(state = [], action) {
	switch (action.type) {
		case ADD:
			return addUrl(state, action)
		case DELETE:
			return removeUrl(state, action)
		case COPY:
			return copyUrl(state, action)
		case CLEAN:
			return []
		default:
			return state
	}
}

function copyUrl(state, action) {
	const {
		payload: { id },
	} = action
	const index = state.findIndex((item) => item.id === id)
	const new_state = [...state]
	new_state[index].isCopied = true
	return new_state
}

function addUrl(state, action) {
	const {
		payload: { link, shortenLink, isCopied, id },
	} = action
	return [...state, { id, link, shortenLink, isCopied }]
}

function removeUrl(state, action) {
	const {
		payload: { id },
	} = action
	return [...state].filter((item) => id !== item.id)
}
