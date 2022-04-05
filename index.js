const togglebutton = document.querySelector('.menu-mobile img');
const sbar = document.querySelector('.scroll-bar');
const quitbutton = document.querySelector('.scroll-bar-image img');
const sbarbuttons = document.querySelectorAll('.scroll-bar-list');
const bmenu = document.querySelector('.menu');
const greenbutton= document.querySelectorAll('.works button')
var i
greenbutton.forEach((element,index)=>{
  element.addEventListener('click', ()=>{
    i=index
    console.log(i)
    projects(i)
  })
})
togglebutton.addEventListener('click', () => {
  sbar.classList.toggle('active');
  bmenu.classList.toggle('active');
});

quitbutton.addEventListener('click', () => {
  sbar.classList.remove('active');
  bmenu.classList.toggle('active');
});

sbarbuttons.forEach((element) => {
  element.addEventListener('click', () => {
    sbar.classList.remove('active');
    bmenu.classList.toggle('active');
  });
});

let data=[
  {name:"Youtube Page Project",
  description:" A basic page to learn how to use flexbox, hover, etc..." ,
  image:"./images/youtube_page_img.png",
  technologies: ["HTML","CSS"],
  liveversion:"https://santiago220991.github.io/youtubepage/",
  source:"https://github.com/Santiago220991/youtubepage"},
  
  {name:"Tribute Page",
  description:"This is a basic example of a tribute page. It was a project made it in Microverse trials",
  image:"./images/tribute_page_img.png",
  technologies:["HTML", "CSS", "JavaScript"],
  liveversion:"https://santiago220991.github.io/Microverse-Trial/",
  source:"https://github.com/Santiago220991/Tribute-Page"},
  
  {name:"Hello World: First Project",
  description:"This is my first project. It is a very simple project to learn how to use Github and HTML",
  image:"./images/hello_world_img.png",
  technologies:["HTML"],
  liveversion:"https://santiago220991.github.io/Hello-World/",
  source:"https://github.com/Santiago220991/Hello-World"},
  
  {name:"Portfolio: Bootstrap",
  description:"This is a project to learn how to use Bootstrap 5. This is the same portfolio buy it was made it using Bootstrap with my coding partner",
  image:"./images/portfolio_bootstrap_img.png",
  technologies:["HTML", "CSS", "Bootstrap"],
  liveversion:"https://santiago220991.github.io/Bootstrap-project/",
  source:"https://github.com/Santiago220991/Bootstrap-project"},
  
  {name:"App Salon",
  description:"This Project was not made by me. It is a friend's project. This project will be replaced for another project made by myself",
  image:"./images/app_salon_img.png",
  technologies:["HTML", "CSS", "Javascript"],
  liveversion:"https://santiago220991.github.io/AppSalon/",
  source:"https://github.com/Santiago220991/AppSalon"},
  
  {name:"Calculator",
  description:"This Project was not made by me. It is a friend's project. This project will be replaced for another project made by myself",
  image:"./images/calculator_img.png",
  technologies:["HTML","CSS","Javascript","React"],
  liveversion:"https://santiago220991.github.io/Math-magician/",
  source:"https://github.com/Santiago220991/Math-magician",}
    
  ]


function projects(i){
let popupcontainer=document.createElement('div')
popupcontainer.className="popupcontainer"

let popupimage=document.createElement('div')
popupimage.className="popupimage"
popupcontainer.appendChild(popupimage)
let imga=document.createElement('img')
imga.src=data[i].image
imga.className="imga"
popupimage.appendChild(imga)

let imgb=document.createElement('img')
imgb.className="imgb"
imgb.src="./images/quit_white_img.png"
popupimage.appendChild(imgb)

let popupdiv=document.createElement('div')
popupdiv.className="popupdiv"
popupcontainer.appendChild(popupdiv)

let popuptitle=document.createElement('h3')
popuptitle.className="popuptitle"
popuptitle.textContent=data[i].name
popupdiv.appendChild(popuptitle)

let popuptechs=document.createElement('ul')
popuptechs.className="popuptechs"
popupdiv.appendChild(popuptechs)
data[i].technologies.forEach(element =>{
  let popuptechsitem=document.createElement('li')
  popuptechsitem.className="popuptechsitem"
  popuptechsitem.textContent=element
  popuptechs.appendChild(popuptechsitem)
})

let popuptext=document.createElement('p')
popuptext.className="popuptext"
popuptext.textContent=data[i].description
popupdiv.appendChild(popuptext)

let popupfooter=document.createElement('div')
popupfooter.className="popupfooter"
popupdiv.appendChild(popupfooter)


let footerbutton=document.createElement('a')
footerbutton.className='footerbutton'
footerbutton.href=data[i].liveversion
popupfooter.append(footerbutton)

let buttontext=document.createElement('div')
buttontext.className="buttontext"
buttontext.innerHTML='<p>See Live</p>'
footerbutton.appendChild(buttontext)

let buttonimage=document.createElement('img')
buttonimage.className='buttonimage'
buttonimage.src="./images/source_img.png"
footerbutton.appendChild(buttonimage)

footerbutton=document.createElement('a')
footerbutton.className='footerbutton'
footerbutton.href=data[i].source
popupfooter.append(footerbutton)

buttontext=document.createElement('div')
buttontext.className="buttontext"
buttontext.innerHTML='<p>See Source</p>'
footerbutton.appendChild(buttontext)

buttonimage=document.createElement('img')
buttonimage.className='buttonimage'
buttonimage.src="./images/github_white_img.png"
footerbutton.appendChild(buttonimage)


document.body.appendChild(popupcontainer)

}