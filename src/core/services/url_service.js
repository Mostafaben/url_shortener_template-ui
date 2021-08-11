import { appDoneFetchingDataAction, appFetchingDataAction } from "../../state/actions/app_actions"
import { addUrlAction } from "../../state/actions/shorten_urls_actions"
import {
	addUserUrlAction,
	deleteUserUrlAction,
	setUrlsAction,
} from "../../state/actions/user_urs_actions"
import store from "../../state/store"
import { db } from "../firebase"
import { isLoggedIn } from "./authentication_service"
import { openErrorDialog, openSuccessDialog } from "./ui_service"

export function shortenLink(link) {
	const user = isLoggedIn()
	store.dispatch(appFetchingDataAction())
	const queryData = {
		link,
		shortenLink: Date.now().toString(),
		userId: user ? user.uid : null,
		createdAt: new Date().toUTCString(),
		visited: 0,
	}
	createUrl(queryData)
		.then(() => {
			store.dispatch(addUrlAction(link, queryData.shortenLink))
		})
		.catch(() => {
			openErrorDialog("Url was not created")
		})
		.finally(() => {
			store.dispatch(appDoneFetchingDataAction())
		})
}

export async function shortenLinkWithName(link, name) {
	store.dispatch(appFetchingDataAction())
	if (name.length == 0) name = Date.now().toString()
	const user = isLoggedIn()
	name = name.replace(/ /g, "-")
	const count = countDataLength(await NameExists(name))
	if (count > 0) {
		name += `-${count + 1}`
	}

	let queryData = {
		link,
		shortenLink: name,
		userId: user ? user.uid : null,
		createdAt: new Date().toUTCString(),
		visited: 0,
	}

	createUrl(queryData)
		.then((doc) => {
			openSuccessDialog("Url was created successfully")
			store.dispatch(addUserUrlAction({ ...queryData, id: doc.id }))
		})
		.catch(() => {
			openErrorDialog("Url was not created")
		})
		.finally(() => store.dispatch(appDoneFetchingDataAction()))
}

export function getUserShortenUrls() {
	const user = isLoggedIn()
	if (!user) return
	store.dispatch(appFetchingDataAction())
	db.collection("urls")
		.where("userId", "==", user.uid)
		.get()
		.then((snapShot) => {
			const urls = []
			snapShot.forEach((doc) => {
				urls.push({ ...doc.data(), id: doc.id })
			})
			store.dispatch(setUrlsAction(urls))
		})
		.catch((error) => {
			openErrorDialog(error.message)
		})
		.finally(() => store.dispatch(appDoneFetchingDataAction()))
}

export function visitLink(id, visited) {
	return db
		.collection("urls")
		.doc(id)
		.update({ visited: visited + 1 })
}

export function getLinkByName(name) {
	return db.collection("urls").where("shortenLink", "==", name.toString()).get()
}

export function deleteLinkById(id) {
	store.dispatch(appFetchingDataAction())
	db.collection("urls")
		.doc(id)
		.delete()
		.then(() => {
			store.dispatch(deleteUserUrlAction(id))
			openSuccessDialog("Link was deleted Successfully")
		})
		.catch((error) => {
			openErrorDialog(error.message)
		})
		.finally(() => store.dispatch(appDoneFetchingDataAction()))
}

function NameExists(name) {
	return db.collection("urls").where("shortenLink", "==", name).get()
}

function createUrl(data) {
	return db.collection("urls").add(data)
}

function countDataLength(snapShot) {
	let count = 0
	snapShot.forEach((_) => count++)
	return count
}
