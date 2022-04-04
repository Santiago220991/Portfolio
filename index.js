const togglebutton=document.querySelector(".menu-mobile img")
const s_bar=document.querySelector(".scroll-bar")
const quit_button=document.querySelector(".scroll-bar-image img")
togglebutton.addEventListener("click", () => {
    s_bar.classList.toggle("active")
    console.log(togglebutton)
})

quit_button.addEventListener("click", () => {
    s_bar.classList.remove("active")
})