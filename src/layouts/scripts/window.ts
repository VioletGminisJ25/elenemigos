window.onblur = () => {
	document.getElementsByTagName("title")[0].innerHTML = "No te vayas!";
}
window.onfocus = () => {
	document.title = "El Enemigos!";
}
