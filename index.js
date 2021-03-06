const data = [
  {
    name: 'France Ligue 1 Stats',
    description: 'This is a Single Page Application that shows the list of teams that belong to the France Ligue 1. This project uses an API to get the data, just the mobile version of the project was designed and has the next features: Show the list of teams that contest in the France League 1 season 2021-2022 and show the stats of each team during the contest.',
    image: './images/france_ligue1_img.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    liveversion: 'https://santiago-france-ligue1-stats.netlify.app/',
    source: 'https://github.com/Santiago220991/France-Ligue-1-Stats',
  },

  {
    name: 'Bookstore',
    description: "This is a Bookstore webpage. This project uses an API to store the books. It shows a booklist with the next features: Show the book's title and author, add a new book and remove a book.",
    image: 'https://user-images.githubusercontent.com/98363075/175354896-7e9ef2a9-aece-4a36-ae4a-1245fb758d76.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    liveversion: 'https://santiago-bookstore.netlify.app/',
    source: 'https://github.com/Santiago220991/Bookstore',
  },

  {
    name: 'Math Magicians',
    description: "This is a SPA webpage that shows a functional calculator with the next basic functions: Addition, Subtraction, Multiplication and Division.",
    image: './images/calculator_img.png',
    technologies: ['HTML', 'CSS', 'Javascript', 'React'],
    liveversion: 'https://santiago-math-magicians.netlify.app/',
    source: 'https://github.com/Santiago220991/math-magicians', 
  },

  {
    name: 'Commedy Movies Web Page',
    description: "This is a movie web page it was built using two APIs. One to get the movie's data and the other to save comments and the number of likes of each movie.",
    image: 'https://user-images.githubusercontent.com/98363075/172874651-7c73b26f-4b7b-4292-bab7-1372173cc812.png',
    technologies: ['HTML', 'CSS','JavaScript'],
    liveversion: 'https://santiago220991.github.io/JavaScript-Capstone/dist/',
    source: 'https://github.com/Santiago220991/JavaScript-Capstone',
  },

  {
    name: 'To Do List',
    description: 'This is a To Do List. It shows a minimalist desing with the nex features: Add new tasks, edit tasks, markup completed tasks, and erase completed tasks. This project was build with HTML, CSS and Javascript.',
    image: './images/Todays_To_Do_img.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveversion: 'https://santiago220991.github.io/To-Do-List/dist/',
    source: 'https://github.com/Santiago220991/To-Do-List',
  },

  {
    name: 'Music Band Web Page',
    description: 'This is a music band web page. It contains information like: Albums, Videos, Pictures, Shop. This project was made with HTML, CSS, Javascript and Boostrap 5.',
    image: './images/music_band_web_page.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    liveversion: 'https://santiago220991.github.io/Music-Band-Web-Page/',
    source: 'https://github.com/Santiago220991/Music-Band-Web-Page',
  },

];

const togglebutton = document.querySelector('.menu-mobile img');
const sbar = document.querySelector('.scroll-bar');
const quitbutton = document.querySelector('.scroll-bar-image img');
const sbarbuttons = document.querySelectorAll('.scroll-bar-list');
const bmenu = document.querySelector('.menu');
const emailinput = document.querySelector('.email');
const form = document.querySelector('form');
const msgerror = document.querySelector('.message-error');
const nameinput = document.querySelector('.name');
const textareabox = document.querySelector('.textarea');
const workssection = document.querySelector('.works');
let i;
let j;
for (j = 0; j <= 5; j += 1) {
  const workcard = document.createElement('div');
  workcard.className = 'works-card';
  workcard.innerHTML = `<div class="snapshot-container">
  <img
    class="snapshot"
    src="${data[j].image}"
    alt="snapshot_img1"
  />
</div>
<div>
  <h3>${data[j].name}</h3></div>`;
  const workcardul = document.createElement('ul');
  workcard.appendChild(workcardul);

  data[j].technologies.forEach((element) => {
    const workcardli = document.createElement('li');
    workcardli.textContent = element;
    workcardul.appendChild(workcardli);
  });
  workssection.appendChild(workcard);
  workcard.innerHTML += '<div><button type="button">See Project</button></div>';
}
const greenbutton = document.querySelectorAll('.works button');

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

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (emailinput.value === ((emailinput.value).toLowerCase())) {
    form.submit();
    msgerror.classList.remove('active');
  } else {
    msgerror.classList.add('active');
  }
});

const storage = {
  data: [''],
};

function setStyles() {
  const sessionsaved = JSON.parse(localStorage.getItem('session'));
  [emailinput.value, nameinput.value, textareabox.value] = sessionsaved.data;
}

function populateStorage() {
  storage.data[0] = emailinput.value;
  storage.data[1] = nameinput.value;
  storage.data[2] = textareabox.value;
  localStorage.setItem('session', JSON.stringify(storage));
  setStyles();
}

if (!localStorage.getItem('session')) {
  populateStorage();
} else {
  setStyles();
}

emailinput.onchange = populateStorage;
nameinput.onchange = populateStorage;
textareabox.onchange = populateStorage;
