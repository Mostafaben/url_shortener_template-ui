import { combineReducers } from "redux"
import loginDialogReducer from "./login_dialog_reducer"
import shortenUrlsReducer from "./shorten_urls_reducer"

const reducers = combineReducers({
	loginDialogReducer,
	shortenUrlsReducer,
})

export default reducers
