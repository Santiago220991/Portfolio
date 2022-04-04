const togglebutton=document.querySelector(".menu-mobile img")
const s_bar=document.querySelector(".scroll-bar")
console.log(s_bar)
console.log(togglebutton)
togglebutton.addEventListener("click", () => {
    s_bar.classList.toggle("active")
    console.log(togglebutton)
})