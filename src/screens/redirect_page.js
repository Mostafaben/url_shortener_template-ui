import React from "react"
import { useHistory, useParams } from "react-router-dom"
import { getLinkByName, visitLink } from "../core/services/url_service"

import notFoundImage from "./../assets/not_found.jpg"

export function RedirectPage() {
	const [linkExists, setLinkExists] = React.useState(true)
	const { name } = useParams()

	function navigateToLink(link) {
		location.href = link
	}

	React.useEffect(() => {
		getLinkByName(name).then((links) => {
			if (links.empty) {
				return setLinkExists(false)
			}
			links.forEach(async (e) => {
				const { link, visited } = e.data()
				await visitLink(e.id, visited)
				navigateToLink(link)
			})
		})
	}, [])

	return (
		<div
			style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}
		>
			{!linkExists ? <img src={notFoundImage} style={{ width: "min(80vw, 500px)" }} /> : null}
		</div>
	)
}
