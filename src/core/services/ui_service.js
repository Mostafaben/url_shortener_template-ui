import sweetAlert from "sweetalert2"

function openErrorDialog(message) {
	sweetAlert.fire({
		title: "error",
		text: message,
		icon: "error",
	})
}

function openSuccessDialog(message) {
	sweetAlert.fire({
		title: "Success",
		text: message,
		icon: "success",
	})
}

function openConfirmDialog({ title, text }) {
	return sweetAlert.fire({
		title,
		text,
		icon: "question",
		showCancelButton: "true",
		cancelButtonText: "Cancel",
		confirmButtonText: "Confirm",
	})
}

export { openSuccessDialog, openErrorDialog, openConfirmDialog }
