function btnCollapse(objOpen, objClose) {
    objClose.classList.remove("active");
    objOpen.classList.add("active");
    objOpen.style.maxHeight = objOpen.scrollHeight + "px";
    objClose.style.maxHeight = null;
}
function resizeEvent() {
    let activeSection = document.querySelector(".results-section.active");
    activeSection.style.maxHeight = activeSection.scrollHeight + "px";
}

export { btnCollapse, resizeEvent }