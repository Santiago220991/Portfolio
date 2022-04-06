const data = [
  {
    name: 'Youtube Page Project',
    description: 'A basic page to learn how to use flexbox, hover, etc Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consectetur nemo corporis ipsa illum pariatur quasi asperiores optio animi! Voluptas delectus dolorum aut odit accusantium quis sint velit eum ducimus.',
    image: './images/youtube_page_img.png',
    technologies: ['HTML', 'CSS', 'Ruby on Rails', 'Javascript', 'Bootstrap', 'React'],
    liveversion: 'https://santiago220991.github.io/youtubepage/',
    source: 'https://github.com/Santiago220991/youtubepage',
  },

  {
    name: 'Tribute Page',
    description: 'This is a basic example of a tribute page. It was a project made it in Microverse trials Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consectetur nemo corporis ipsa illum pariatur quasi asperiores optio animi! Voluptas delectus dolorum aut odit accusantium quis sint velit eum ducimus.',
    image: './images/tribute_page_img.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Ruby on Rails', 'React'],
    liveversion: 'https://santiago220991.github.io/Tribute-Page/',
    source: 'https://github.com/Santiago220991/Tribute-Page',
  },

  {
    name: 'Hello World: First Project',
    description: 'This is my first project. It is a very simple project to learn how to use Github and HTML Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consectetur nemo corporis ipsa illum pariatur quasi asperiores optio animi! Voluptas delectus dolorum aut odit accusantium quis sint velit eum ducimus.',
    image: './images/hello_world_img.png',
    technologies: ['HTML', 'JavaScript', 'Ruby on Rails', 'Bootstrap'],
    liveversion: 'https://santiago220991.github.io/Hello-World/',
    source: 'https://github.com/Santiago220991/Hello-World',
  },

  {
    name: 'Portfolio: Bootstrap',
    description: 'This is a project to learn how to use Bootstrap 5. This is the same portfolio buy it was made it using Bootstrap with my coding partner Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consectetur nemo corporis ipsa illum pariatur quasi asperiores optio animi! Voluptas delectus dolorum aut odit accusantium quis sint velit eum ducimus.',
    image: './images/portfolio_bootstrap_img.png',
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    liveversion: 'https://santiago220991.github.io/Bootstrap-project/',
    source: 'https://github.com/Santiago220991/Bootstrap-project',
  },

  {
    name: 'App Salon',
    description: "This Project was not made by me. It is a friend's project. This project will be replaced for another project made by myself Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consectetur nemo corporis ipsa illum pariatur quasi asperiores optio animi! Voluptas delectus dolorum aut odit accusantium quis sint velit eum ducimus.",
    image: './images/app_salon_img.png',
    technologies: ['HTML', 'CSS', 'Javascript', 'Ruby on Rails', 'React', 'Bootstrap'],
    liveversion: 'https://santiago220991.github.io/AppSalon/',
    source: 'https://github.com/Santiago220991/AppSalon',
  },

  {
    name: 'Calculator',
    description: "This Project was not made by me. It is a friend's project. This project will be replaced for another project made by myself Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam consectetur nemo corporis ipsa illum pariatur quasi asperiores optio animi! Voluptas delectus dolorum aut odit accusantium quis sint velit eum ducimus.",
    image: './images/calculator_img.png',
    technologies: ['HTML', 'CSS', 'Javascript', 'React'],
    liveversion: 'https://santiago220991.github.io/Math-magician/',
    source: 'https://github.com/Santiago220991/Math-magician',
  },

];

const togglebutton = document.querySelector('.menu-mobile img');
const sbar = document.querySelector('.scroll-bar');
const quitbutton = document.querySelector('.scroll-bar-image img');
const sbarbuttons = document.querySelectorAll('.scroll-bar-list');
const bmenu = document.querySelector('.menu');
const greenbutton = document.querySelectorAll('.works button');

let i;
greenbutton.forEach((element, index) => {
  element.addEventListener('click', () => {
    i = index;
    const popupcontainer = document.createElement('div');
    popupcontainer.className = 'popupcontainer';

    const popupimage = document.createElement('div');
    popupimage.className = 'popupimage';
    popupcontainer.appendChild(popupimage);
    const imga = document.createElement('img');
    imga.src = data[i].image;
    imga.className = 'imga';
    popupimage.appendChild(imga);

    const imgb = document.createElement('img');
    imgb.className = 'imgb';
    imgb.src = './images/quit_white_img.png';
    popupimage.appendChild(imgb);

    const popupdiv = document.createElement('div');
    popupdiv.className = 'popupdiv';
    popupcontainer.appendChild(popupdiv);

    const popuptitle = document.createElement('h3');
    popuptitle.className = 'popuptitle';
    popuptitle.textContent = data[i].name;
    popupdiv.appendChild(popuptitle);

    const popuptechs = document.createElement('ul');
    popuptechs.className = 'popuptechs';
    popupdiv.appendChild(popuptechs);
    data[i].technologies.forEach((element) => {
      const popuptechsitem = document.createElement('li');
      popuptechsitem.className = 'popuptechsitem';
      popuptechsitem.textContent = element;
      popuptechs.appendChild(popuptechsitem);
    });

    const popuptext = document.createElement('p');
    popuptext.className = 'popuptext';
    popuptext.textContent = data[i].description;
    popupdiv.appendChild(popuptext);

    const popupfooter = document.createElement('div');
    popupfooter.className = 'popupfooter';
    popupdiv.appendChild(popupfooter);

    let footerbutton = document.createElement('a');
    footerbutton.className = 'footerbutton';
    footerbutton.href = data[i].liveversion;
    popupfooter.append(footerbutton);

    let buttontext = document.createElement('div');
    buttontext.className = 'buttontext';
    buttontext.innerHTML = '<p>See Live</p>';
    footerbutton.appendChild(buttontext);

    let buttonimage = document.createElement('img');
    buttonimage.className = 'buttonimage';
    buttonimage.src = './images/source_img.png';
    footerbutton.appendChild(buttonimage);

    footerbutton = document.createElement('a');
    footerbutton.className = 'footerbutton';
    footerbutton.href = data[i].source;
    popupfooter.append(footerbutton);

    buttontext = document.createElement('div');
    buttontext.className = 'buttontext';
    buttontext.innerHTML = '<p>See Source</p>';
    footerbutton.appendChild(buttontext);

    buttonimage = document.createElement('img');
    buttonimage.className = 'buttonimage';
    buttonimage.src = './images/github_white_img.png';
    footerbutton.appendChild(buttonimage);

    document.body.appendChild(popupcontainer);
    const popupquit = document.querySelector('.imgb');
    const popupwindow = document.querySelector('.popupcontainer');

    popupwindow.classList.toggle('active');
    popupquit.addEventListener('click', () => {
      popupwindow.classList.remove('active');
      popupwindow.remove();
    });
  });
});

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

const emailinput=document.querySelector('#email')
const form=document.querySelector('form')
const msgerror=document.querySelector('.message-error')
form.addEventListener('submit', (event) =>{
  console.log(event)
  event.preventDefault();
  
  if(emailinput.value===((emailinput.value).toLowerCase())){
   console.log(emailinput.value)
   msgerror.classList.remove('active')
  }else{
    msgerror.classList.add('active')
  }
  
})
