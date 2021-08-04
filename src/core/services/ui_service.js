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

export { openSuccessDialog, openErrorDialog }
