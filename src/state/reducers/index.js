import { combineReducers } from "redux"
import appReducer from "./app_reducer"
import authenticationReducer from "./authentication_reducer"
import loginDialogReducer from "./login_dialog_reducer"
import shortenUrlsReducer from "./shorten_urls_reducer"
import userUrlsReducer from "./user_urls_reducer"

const reducers = combineReducers({
	loginDialogReducer,
	shortenUrlsReducer,
	authenticationReducer,
	appReducer,
	userUrlsReducer,
})

export default reducers
