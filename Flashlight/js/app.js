document.addEventListener("dblclick", (e) => {
	document.querySelector(".light").classList.toggle("_on");
});
document.addEventListener("mousemove", (e) => {
	document.documentElement.style.setProperty('--move-x', `${(e.pageX / window.innerWidth) * 100}%`);
	document.documentElement.style.setProperty('--move-y', `${(e.pageY / window.innerHeight) * 100}%`);
});
