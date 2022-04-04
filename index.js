const togglebutton=document.querySelector(".scroll-bar-image img")
const s_bar=document.querySelector("scroll-bar")
console.log(s_bar)
togglebutton.addEventListener("click", () => {
    s_bar.classList.toggle("active")
})