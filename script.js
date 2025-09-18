const bars = document.getElementById("bars")
const times = document.getElementById("times")
const navLinks = document.getElementById("nav-link")
const logo = document.getElementById("logo")
const wrapper = document.getElementById("wrapper")
const anotherNav = document.getElementById("another-nav")
bars.addEventListener("click", function(){
    bars.style.display = "none";
    times.style.display = "inline";
    let home = document.createElement("a")
    home.innerHTML = '<i class="fas fa-home"></i>'
    home.href="index.html"
    let about = document.createElement("a")
    about.innerText = "About Us"
    about.href = "About.html"
    let service = document.createElement("a")
    service.innerText = "Services"
    service.href = "service.html"
    let gallery = document.createElement("a")
    gallery.innerText = "Gallery"
    gallery.href = "gallery.html"
    let contact = document.createElement("a")
    contact.innerText = "Contact Us"
    contact.href = "contact.html"
    let faq = document.createElement("a")
    faq.innerText = "FAQ"
    faq.href = "faq.html"
    let blog = document.createElement("a")
    blog.innerText = "Blog"
    blog.href = "blogs.html"
    anotherNav.classList.add("another-nav")
    anotherNav.appendChild(home)
    anotherNav.appendChild(about)
    anotherNav.appendChild(service)
    anotherNav.appendChild(gallery)
    anotherNav.appendChild(contact)
    anotherNav.appendChild(faq)
    anotherNav.appendChild(blog)
})
times.addEventListener("click", () =>{
    times.style.display = "none";
    bars.style.display = "inline";
    anotherNav.innerHTML = ""
})
let lastScroll = 0
const header = document.querySelector("header")
window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll){
        header.classList.add("hide")
    }
    else{
        header.classList.remove("hide")
    }
    lastScroll = currentScroll
})
document.addEventListener("DOMContentLoaded", () => {
    const wrenchText = document.getElementById("wrench");
    setTimeout(() => {
        wrenchText.classList.add("fadeInFromLeft");
    }, 3000); 
});
document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");

  function checkVisibility() {
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});
const form = document.getElementById('contactForm');
if(form){
  

  form.addEventListener('click', function(e) {
    console.log("ok")
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('mobile').value;
    const message = document.getElementById('message').value;
    if (name === "" && email === "" && message ===""){
      alert("Field cannot be empty")
      return;
    }
    else{
      const phoneNumber = "2348060265687"; 
    const whatsappMessage = `Hello, my name is ${name}. My email is ${email}. Here is my message: ${message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
    alert("message sent successfuly")
    }
    
  });
}
  const wk = document.getElementById("A&B")
if (wk){
    wk.addEventListener("click", function(){
    window.location.href = "index.html  "
  })
}
const bookService = document.getElementById("book-service")
if (bookService){
  bookService.addEventListener("click", function(){
  const whatsappMessage = `Hello, my name is---. I want to book a service at Wrench King Autos`;
  const phoneNumber = "2348060265687";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  window.open(url, "_blank")
})
}
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      faqItem.classList.toggle('active');
    });
  });

let index = 0;
const track = document.querySelector('.slider-track');
const items = document.querySelectorAll('.slider-item');
const total = items.length;

function moveSlider() {
  index++;
  if (index >= total) index = 0;
  track.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(moveSlider, 4000);
function playVideo(container) {
  const img = container.querySelector("img");
  const overlay = container.querySelector(".video-overlay");
  const video = container.querySelector("video");
  img.style.display = "none";
  overlay.style.display = "none";
  video.style.display = "block";
  video.play();
}