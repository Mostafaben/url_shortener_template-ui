import { combineReducers } from "redux"
import authenticationReducer from "./authentication_reducer"
import loginDialogReducer from "./login_dialog_reducer"
import shortenUrlsReducer from "./shorten_urls_reducer"

const reducers = combineReducers({
	loginDialogReducer,
	shortenUrlsReducer,
	authenticationReducer,
})

export default reducers
