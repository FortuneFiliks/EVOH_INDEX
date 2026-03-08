



//COUNTER ANIMATION
function animateCounter(element, target, duration) {
  let start = 0;
  let startTime = null;

  function updateCounter(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    element.textContent = Math.floor(progress * (target - start) + start);

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    }
  }

  requestAnimationFrame(updateCounter);
}

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute("data-target"), 10);
          animateCounter(counter, target, 2000);
        });
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.getElementById("stats"));
});



const get_Name_Text_Flex = document.querySelector(".name_text_flex");

function get_Name_Text_Flex_Animation(entries, target){
	entries.forEach( entry => {
		if(entry.isIntersecting){
			entry.target.classList.add("animate_name_text_flex");
		}
		
	});
	
}

const get_Name_Text_Flex_Animation_Root =
{
	root : null,
	rootMargin : "0px",
	threshold : 0.2
}

const get_Name_Text_Flex_Api = new IntersectionObserver(get_Name_Text_Flex_Animation, get_Name_Text_Flex_Animation_Root);

get_Name_Text_Flex_Api.observe(get_Name_Text_Flex);



//SECOND SECTION ANIMATION

const get_Expertise_Image = document.querySelector(".expertise_overview_img");


function get_Expertise_Image_Animation(entries, target){
    entries.forEach( entry => {
		if(entry.isIntersecting){
		    entry.target.classList.add("animate_expertise_overview_img");
		}
		
	});


}	


const get_Expertise_Image_Animation_Root = 
{
    root : null,
    rootMargin : "0px",	
	threshold : 0.4
}


const get_Expertise_Image_Animation_Api = new IntersectionObserver(get_Expertise_Image_Animation, get_Expertise_Image_Animation_Root);

get_Expertise_Image_Animation_Api.observe(get_Expertise_Image);











const wrapper = document.querySelector('.third_section_flex');

let slideWidth = wrapper.clientWidth;

const actualSlides = 3;
const totalItems = actualSlides + 2;

let currentSlideIndex = 1;


// Update slide position
function updateSlide(newIndex) {
    currentSlideIndex = newIndex;
    const offset = -currentSlideIndex * slideWidth;
    wrapper.style.transform = `translateX(${offset}px)`;
}


// Update width on resize
function updateSlideWidth() {
    slideWidth = wrapper.clientWidth;
    updateSlide(currentSlideIndex);
}

window.addEventListener('resize', updateSlideWidth);


// Forward
function nextSlide() {

    updateSlide(currentSlideIndex + 1);

    if (currentSlideIndex === totalItems - 1) {

        setTimeout(() => {

            wrapper.style.transition = 'none';
            updateSlide(1);

            setTimeout(() => {
                wrapper.style.transition = 'transform 0.5s ease-in-out';
            }, 50);

        }, 500);
    }
}


// Backward
function prevSlide() {

    updateSlide(currentSlideIndex - 1);

    if (currentSlideIndex === 0) {

        setTimeout(() => {

            wrapper.style.transition = 'none';
            updateSlide(actualSlides);

            setTimeout(() => {
                wrapper.style.transition = 'transform 0.5s ease-in-out';
            }, 50);

        }, 500);
    }
}


// Auto slide
let next_Slide_Action = setInterval(nextSlide, 4000);


// Initial correct positioning
updateSlide(currentSlideIndex);