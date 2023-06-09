//!DISABLE RIGHT CLICK
document.addEventListener("contextmenu", function(e){
  e.preventDefault();
},false);
//!SHOW MENU
const navToggle = document.querySelector(".nav_toggle"),
      navMenu = document.querySelector(".nav_menu");


    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("show-menu");
        navToggle.classList.toggle("active");
    })


//!TYPING TEXT
    var typed = new Typed(".profession_text", {
        strings: ["Web Developer", "Web Designer", "Web Monster"],
        typeSpeed: 50,
        backSpeed: 70,
        loop: true,
    })


//!COUNTER 
    const counters = document.querySelectorAll(".counter");

    counters.forEach((counter) => {
      counter.innerText = "0";
    
      const updateCounter = () => {
        const target = +counter.getAttribute("data-counter");
        const c = +counter.innerText;
    
        const increment = target / 200;
    
        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 100);
        } else {
          counter.innerText = target;
        }
      };
    
      updateCounter();
    });
    
//!BACK TOP BUTTON
      const back_btn_top = document.querySelector(".btn-top");

      window.addEventListener("scroll", () => {
        if(window.scrollY >= 500){
           back_btn_top.classList.add("active")
        }else{
            back_btn_top.classList.remove("active")
        }
      })



//!SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 250,
//     reset: true
});

sr.reveal('.home_content, .about_banner, .brand_container, .copyright',{}); 
sr.reveal('.about_content, .contact_container, .skills_wrapper, .count_wrapper',{delay: 500}); 
sr.reveal('.social_list,.title_wrapper, .work_list',{ interval: 250}); 
sr.reveal('.service_item, .team_item, .work_item, .input_field',{interval: 250}); 
//!SENDING EMAIL



