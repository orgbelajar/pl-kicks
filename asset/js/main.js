// =========== SHOW MENU =================
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // validasi yang variabelnya ada
    if (toggle && nav){
        toggle.addEventListener('click', ()=>{ // Jika si toggle di klik maka navbar akan ke atas
            // Jika kita menambahkan show-menu maka dia akan menuju ke div tag bersama nav_menu class 
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

// =========== REMOVE MENU UNTUK TAMPILAN MOBILE =================
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //Ketika kita klik setiap nav__link, kita akan remove show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// =========== SCROLL SECTION ACTIVE LINK =================
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link') 
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')  
        }
    })
}
window.addEventListener('scroll', scrollActive)

// ======================== CHANGE BACKGROUND HEADER =========================
function scrollHeader(){
    const nav = document.getElementById('header')

    // Ketika kita scroll >= 200 viewport height maka box shadow nya akan muncul, kalau scroll < 200 maka box shadownya hilang
    if(this.scrollY >= 200) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// =========== SHOW SCROLL TOP =================
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')

    // Ketika kita scroll >= 560 viewport height maka akan menambahkan show-scroll class to the tag with the scroll-top
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

// =========== DARK LIGHT THEME ==========
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-toggle-right'

// Previous selected topic (jika user memilih)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Kita mendapatkan tema saat ini yang dimiliki interface dengan memvalidasi class='dark-theme'
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.body.classList.contains(iconTheme) ? 'bxs-toggle-left' : 'bxs-toggle-right'


// Kita memvalidasi jika user sebelumnya memilih topik
if (selectedTheme){
    // if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated
    document.body.classList[selectedTheme == 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon == 'bxs-toggle-left' ? 'add' : 'remove'](iconTheme)
}

// Activate / Deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark/icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user choose
    localStorage.setItem('selected-theme', getCurrentTheme()) 
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== SIZE CHART ANIMATION ====================*/
const sizes = document.querySelectorAll('.size_detail');

function changeSize(){
    sizes.forEach(size => size.classList.remove('active'));
    this.classList.add('active');
}

sizes.forEach(size => size.addEventListener('click', changeSize));

// =========== SLIDESHOW =================
var slideIndex = 1;
showSlides(slideIndex);

// Next/Previous controls
function plusSlides(n){
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active"
}

// =========== SCROLL REVEAL ANIMATION =================
const sr = ScrollReveal({ 
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(` .home, .about__data, .about__img, 
            .service__content, .products, 
            .size__data, .size__img, 
            .contact__data, .contact__button, 
            .footer__content, .detail__img, .detail__data `, {
    interval: 200
})

//==================== TAMPILAN SUCCESS ====================
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}