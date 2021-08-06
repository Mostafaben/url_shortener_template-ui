import { appReducerTypes } from "../reducers/app_reducer"

const { IS_FETCHING, DONE_FETCHING } = appReducerTypes

export function appFetchingDataAction() {
	return {
		type: IS_FETCHING,
	}
}

export function appDoneFetchingDataAction() {
	return {
		type: DONE_FETCHING,
	}
}
