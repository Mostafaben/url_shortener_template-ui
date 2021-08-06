export const appReducerTypes = {
	IS_FETCHING: "app/fetching_data",
	DONE_FETCHING: "app/done_fetching_data",
}

const initialState = {
	isFetchingData: false,
}

export default function appReducer(state = initialState, action) {
	switch (action.type) {
		case appReducerTypes.IS_FETCHING:
			return {
				...state,
				isFetchingData: true,
			}
		case appReducerTypes.DONE_FETCHING:
			return {
				...state,
				isFetchingData: false,
			}
		default:
			return state
	}
}
