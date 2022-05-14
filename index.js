let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;

//   FORMDATA OBJECT

document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('myForm')
    .addEventListener('submit', handleForm);
});

async function handleForm(ev) {
  ev.preventDefault(); //stop the page reloading
  //console.dir(ev.target);
  let myForm = ev.target;
  let fd = new FormData(myForm);

  //add more things that were not in the form
  fd.append('api-key', 'myApiKey');

  //look at all the contents
  for (let key of fd.keys()) {
    console.log(key, fd.get(key));
  }
  let json = await convertFD2JSON(fd);

  //send the request with the formdata
  let url = 'http://localhost:3000/';
  let h = new Headers();
  h.append('Content-type', 'application/json');

  let req = new Request(url, {
    headers: h,
    body: json,
    method: 'POST',
  });
  //console.log(req);
  fetch(req)
    .then((res) => res.json())
    .then((data) => {
      console.log('Response from server');
      console.log(data);
    })
    .catch(console.warn);
}

function convertFD2JSON(formData) {
  let obj = {};
  for (let key of formData.keys()) {
    obj[key] = formData.get(key);
  }
  return JSON.stringify(obj);
}


// Order Alert
function myFunction(){
  alert(" Sucessful")
}

// EMAIL API AREA
/*const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Host': 'email-sender1.p.rapidapi.com',
		'X-RapidAPI-Key': '5ba92f2e22msh2579ddf0aa5092dp120629jsn23a29759afa2'
	},
	body: '{"key1":"value","key2":"value"}'
};

fetch('https://email-sender1.p.rapidapi.com/?txt_msg=test%20of%20the%20body&to=onifadeadebimpe%40gmail.com&from=Graffiti%20foodies&subject=JUST%20TEST&bcc=bcc-mail%40gmail.com&reply_to=reply-to%40gmail.com&html_msg=%3Chtml%3E%3Cbody%3E%3Cb%3Etest%20of%20the%20body%3C%2Fb%3E%3C%2Fbunmi%3E%3C%2Fhtml%3E&cc=cc-mail%40gmail.com', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));*/