export const loginDialogReducerTypes = {
	SHOW: "login_dialog/show_dialog",
	HIDE: "login_dialog/hide_dialog",
	START_LOADING: "login_dialog/start_loading",
	STOP_LOADING: "login_dialog/stop_loading",
}

const initialState = {
	isShown: false,
	isLoading: false,
}

export default function loginDialogReducer(state = initialState, action) {
	switch (action.type) {
		case loginDialogReducerTypes.SHOW:
			return {
				isShown: true,
				isLoading: state.isLoading,
			}
		case loginDialogReducerTypes.HIDE:
			return {
				isShown: false,
				isLoading: state.isLoading,
			}
		case loginDialogReducerTypes.START_LOADING:
			return {
				isShown: state.isShown,
				isLoading: true,
			}
		case loginDialogReducerTypes.STOP_LOADING:
			return {
				isShown: state.isShown,
				isLoading: false,
			}
		default:
			return state
	}
}
