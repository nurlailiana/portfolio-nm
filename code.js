var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active1", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active1";
  }

  function msWord() {
    window.open("https://drive.google.com/file/d/15mUx4_d1xW-sKZZJoueQFtOFe_TUzzvR/view?usp=drive_link");
  }

  function WebProg() {
    window.open("https://drive.google.com/file/d/11dDfkPY1xhf8uaNpEyauP8yYy5DBCJ2B/view?usp=sharing");
  }

  function msExcel() {
    window.open("https://drive.google.com/file/d/1l_a_vY1bMxgxp1HAbc60d76sAIc9Y0Cw/view?usp=drive_link");
  }

  function Canva() {
    window.open("https://drive.google.com/file/d/1wLY38Ldlrscre-7AXp6svdxKDdFCngYo/view?usp=drive_link");
  }

  function HasilWeb() {
    window.open("https://lingkaranviii.netlify.app");
  }

  function ig() {
    window.open("https://instagram.com/nurlailianaa?utm_source=qr&igshid=MnZNlNGNkZWQ4Mg%3D%3D");
  }

  function linkedin() {
    window.open("https://www.linkedin.com/in/nurlailianam");
  }

