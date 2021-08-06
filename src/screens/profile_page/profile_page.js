import React from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { logout } from "../../core/services/authentication_service"
import CreateLinkDialog from "../../dialogs/create_link_dialog"
import style from "./profile_page.module.css"

const Links = [
	{
		id: "124123",
		link: "https://mostafaben.github.io",
		shortenLink: "https://localhost:3000/mostafaben",
		createdAt: new Date().toLocaleDateString(),
		visited: 30,
	},
	{
		id: "120123",
		link: "https://mostafaben.github.io",
		shortenLink: "https://localhost:3000/mostafaben",
		createdAt: new Date().toLocaleDateString(),
		visited: 30,
	},
	{
		id: "129123",
		link: "https://mostafaben.github.io",
		shortenLink: "https://localhost:3000/mostafaben",
		createdAt: new Date().toLocaleDateString(),
		visited: 30,
	},
	{
		id: "123123",
		link: "https://mostafaben.github.io",
		shortenLink: "https://localhost:3000/mostafaben",
		createdAt: new Date().toLocaleDateString(),
		visited: 30,
	},
]

export default function ProfilePage() {
	const user = useSelector((state) => state.authenticationReducer)
	const [dialogOpen, setDialogOpen] = React.useState(false)
	React.useEffect(() => {
		// get user links
	}, [])

	function handleCreateLinkConfirm(data) {
		console.log(data)
		setDialogOpen(false)
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
