import React, { useEffect } from "react"
import { useSelector } from "react-redux"
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

	useEffect(() => {
		// get user links
	}, [])

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
						<button className="btn btn-primary">New link</button>
					</div>
					<div className={style.links}>
						{Links.map((link, index) => {
							return <Link link={link} key={link.id} />
						})}
					</div>
				</>
			)}
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
