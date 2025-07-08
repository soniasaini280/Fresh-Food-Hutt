
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.onclick = () => document.body.classList.toggle('dark-mode');
  
    function sendmessage() {
      const userName = document.getElementById("name").ariaValueMax;
      alert("Thanks for contacting us! We’ll get back to you soon.");
      return false;
    }

    const scrollBtn = document.getElementById("scrollTopBtn");
    
    window.onscroll = () => {
        scrollBtn.style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) ? "block" : "none";
    };
    scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // toggle menu script
    const toggleBtn = document.getElementById("menu-toggle");
    const navMenu = document.querySelector("nav ul");
    toggleBtn.onclick = () => navMenu.classList.toggle("show");
    
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    const slidesContainer = document.querySelector(".slides");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    let currentSlide = 0;
    let interval;

    function showSlide(index) {
      slidesContainer.style.transform = `translateX(-${index * 100}%)`;
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
        dots[i].classList.toggle("active", i === index);
      });
      currentSlide = index;
    }

    function nextSlide() { showSlide((currentSlide + 1) % slides.length); }
    function prevSlide() { showSlide((currentSlide - 1 + slides.length) % slides.length); }
    function startSlider() { interval = setInterval(nextSlide, 4000); }
    function stopSlider() { clearInterval(interval); }

    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    dots.forEach(dot => {
      dot.addEventListener("click", () => showSlide(parseInt(dot.dataset.slide)));
    });
    
    const slider = document.querySelectorAll(".slider");
    let startX = 0;
    slider.addEventListener("touchstart", e => {
      startX = e.touches[0].clientX;
    });
    slider.addEventListener("touchend", e => {
      let endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) nextSlide();
      else if (endX - startX > 50) prevSlide();
    });
    
    slider.addEventListener("mouseenter", stopSlider);
    slider.addEventListener("mouseleave", startSlider); 
    showSlide(0);
    startSlider();
