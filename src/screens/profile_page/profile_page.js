import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { openSuccessDialog } from "../../core/services/ui_service"
import CreateLinkDialog from "../../dialogs/create_link_dialog"
import { appDoneFetchingDataAction, appFetchingDataAction } from "../../state/actions/app_actions"
import emptyIcon from "./../../assets/inbox.svg"
import style from "./profile_page.module.css"

const Links = []

export default function ProfilePage() {
	const user = useSelector((state) => state.authenticationReducer)
	const dispatch = useDispatch()
	const history = useHistory()
	const [dialogOpen, setDialogOpen] = React.useState(false)
	React.useEffect(() => {
		// get user links
	}, [])
	React.useEffect(() => {
		if (!user) {
			history.push("/")
		}
	}, [user])

	function handleCreateLinkConfirm(data) {
		dispatch(appFetchingDataAction())
		setDialogOpen(false)
		setTimeout(() => {
			dispatch(appDoneFetchingDataAction())
			openSuccessDialog("New link has been added")
		}, 1000)
	}
	function handleCreateLinkCancel() {
		setDialogOpen(false)
	}

	function openDialog() {
		setDialogOpen(true)
	}

	return (
		<div className={style.mainContainer}>
			{!user ? null : (
				<>
					<div className={style.profileContainer}>
						<img src={user.photoURL} />
						<div>
							<p>{user.displayName}</p>
							<p>{user.email}</p>
							<span>
								Phone Number <strong>{user.phoneNumber ? user.phoneNumber : "N/A"}</strong>
							</span>
						</div>
					</div>
					<div className={style.actions}>
						<button className="btn btn-primary" onClick={openDialog}>
							New link
						</button>
					</div>
					<div className={style.links}>
						{Links.map((link) => {
							return <Link link={link} key={link.id} />
						})}
						{Links.length == 0 ? (
							<div className={style.emptyContainer}>
								<img src={emptyIcon} />
								<p>There is now links for now</p>
							</div>
						) : null}
					</div>
				</>
			)}
			{dialogOpen ? (
				<CreateLinkDialog onCancel={handleCreateLinkCancel} onConfirm={handleCreateLinkConfirm} />
			) : null}
		</div>
	)
}

function Link({ link }) {
	return (
		<div className={style.link}>
			<div className={style.linkActions}>
				<i className="far fa-copy"></i>
				<i className="far fa-edit"></i>
				<i className="far fa-trash-alt"></i>
			</div>
			<a href={link.link} target="_blank">
				{link.link}
			</a>
			<a href={link.shortenLink} target="_blank">
				{link.shortenLink}
			</a>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<p>Visiter {link.visited}</p>
				<p>{link.createdAt}</p>
			</div>
		</div>
	)
}
