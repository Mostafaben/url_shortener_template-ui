export const loginDialogReducerTypes = {
	SHOW: "login_dialog/show_dialog",
	HIDE: "login_dialog/hide_dialog",
}

export default function loginDialogReducer(state = false, action) {
	switch (action.type) {
		case loginDialogReducerTypes.SHOW:
			return true
		case loginDialogReducerTypes.HIDE:
			return false
		default:
			return state
	}
}
