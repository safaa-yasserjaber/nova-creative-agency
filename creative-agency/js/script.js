/* ==================================================
            MOBILE MENU
================================================== */


const navLinks = document.querySelectorAll(".nav-link");


navLinks.forEach(link => {


    link.addEventListener("click", () => {


        document
        .querySelector(".main-navigation")
        .classList.remove("active");


    });


});









/* ==================================================
            SMOOTH SCROLL
================================================== */


document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {


    anchor.addEventListener("click", function(e){


        const target =
        document.querySelector(this.getAttribute("href"));



        if(target){


            e.preventDefault();



            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});









/* ==================================================
            ACTIVE NAVIGATION
================================================== */


const sections =
document.querySelectorAll("section");


window.addEventListener("scroll", () => {


    let current = "";



    sections.forEach(section => {


        const sectionTop =
        section.offsetTop - 150;



        if(scrollY >= sectionTop){


            current = section.getAttribute("id");


        }


    });





    navLinks.forEach(link => {


        link.classList.remove("active");



        if(link.getAttribute("href") === "#" + current){


            link.classList.add("active");


        }


    });



});









/* ==================================================
            SCROLL REVEAL ANIMATION
================================================== */


const revealElements =
document.querySelectorAll(
".service-card, .feature-card, .portfolio-card, .testimonial-card, .stat-card"
);



const revealOnScroll = () => {


    revealElements.forEach(element => {


        const elementTop =
        element.getBoundingClientRect().top;



        const windowHeight =
        window.innerHeight;



        if(elementTop < windowHeight - 100){


            element.style.opacity = "1";


            element.style.transform =
            "translateY(0)";


        }


    });


};





revealElements.forEach(element => {


    element.style.opacity = "0";


    element.style.transform =
    "translateY(40px)";


    element.style.transition =
    "all .6s ease";


});





window.addEventListener(
"scroll",
revealOnScroll
);



revealOnScroll();









/* ==================================================
            BACK TO TOP BUTTON
================================================== */



const backToTop =
document.createElement("button");



backToTop.className =
"back-to-top";



backToTop.innerHTML =
"↑";



backToTop.setAttribute(
"aria-label",
"Back to top"
);



document.body.appendChild(backToTop);







window.addEventListener("scroll", () => {



    if(window.scrollY > 500){


        backToTop.classList.add("show");


    }

    else{


        backToTop.classList.remove("show");


    }


});







backToTop.addEventListener(
"click",
()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});