import React from "react"
import { useSelector } from "react-redux"
import { urlHost } from "../../core/environment"
import { openConfirmDialog } from "../../core/services/ui_service"
import {
	deleteLinkById,
	getUserShortenUrls,
	shortenLinkWithName,
} from "../../core/services/url_service"
import CreateLinkDialog from "../../dialogs/create_link_dialog"
import emptyIcon from "./../../assets/inbox.svg"
import style from "./profile_page.module.css"

export default function ProfilePage() {
	const user = useSelector((state) => state.authenticationReducer)
	const links = useSelector((state) => state.userUrlsReducer)
	const [dialogOpen, setDialogOpen] = React.useState(false)

	React.useEffect(() => {
		setTimeout(() => {
			getUserShortenUrls()
		}, 1000)
	}, [])

	function handleCreateLinkConfirm(data) {
		setDialogOpen(false)
		shortenLinkWithName(data.link, data.name)
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
						{links.reverse().map((link) => {
							return <Link link={link} key={link.id} />
						})}
						{links.length == 0 ? (
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
	console.log(link)

	function deleteLink() {
		openConfirmDialog({ title: "Delete Link", text: "Are you sure ?" }).then((result) => {
			if (result.value) {
				deleteLinkById(link.id)
			}
		})
	}

	return (
		<div className={style.link}>
			<div className={style.linkActions}>
				<i className="far fa-copy"></i>
				<i className="far fa-trash-alt" onClick={deleteLink}></i>
			</div>

			<a href={link.link} target="_blank">
				{link.link}
			</a>
			<a href={"links/" + link.shortenLink} target="_blank">
				{urlHost + link.shortenLink}
			</a>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<span>Visiter {link.visited}</span>
				<span>{link.createdAt}</span>
			</div>
		</div>
	)
}
