import React from "react"
import style from "./../assets/styles/dialogs.module.css"

const CreateLinkDialog = ({ onCancel, onConfirm }) => {
	const linkRef = React.useRef()
	const nameRef = React.useRef()
	const wrapperRef = React.useRef()
	const [isClosing, setIsClosing] = React.useState(false)

	function closeDialog() {
		setIsClosing(true)
	}

	function handleCancel() {
		closeDialog()
		setTimeout(() => {
			onCancel()
		}, 300)
	}

	function submitForm(e) {
		e.preventDefault()
		closeDialog()
		setTimeout(() => {
			const data = {
				name: nameRef.current.value,
				link: linkRef.current.value,
			}
			onConfirm(data)
		}, 300)
	}

	function handleOutSideClick(e) {
		if (e.target === wrapperRef.current) {
			closeDialog()
			setTimeout(() => {
				onCancel()
			}, 300)
		}
	}

	return (
		<div className={style.dialog_wrapper} onClick={handleOutSideClick} ref={wrapperRef}>
			<form
				className={`${style.dialog_container} ${
					!isClosing ? style.openDialogAnimation : style.closeDialogAnimation
				}`}
				onSubmit={submitForm}
			>
				<div className={style.dialog_header}>Create Link</div>
				<div className={style.dialog_content}>
					<label>Link</label>
					<input ref={linkRef} className="form-control" name="link" type="url" required />
					<label>Link Name</label>
					<input ref={nameRef} className="form-control" name="name" type="text" />
				</div>
				<div className={style.dialog_actions}>
					<button type="reset" className={style.cancel} onClick={handleCancel}>
						Cancel
					</button>
					<button type="submit" className={style.confirm}>
						Confirm
					</button>
				</div>
			</form>
		</div>
	)
}

export default CreateLinkDialog
