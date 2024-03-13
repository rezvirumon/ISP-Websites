// navbar
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('click');
  const menuItems = document.querySelectorAll('nav ul li a');

  // Function to close the menu
  function closeMenu() {
    menuBtn.checked = false;
  }

  // Add click event listener to each menu item
  menuItems.forEach(item => {
    item.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      const targetId = this.getAttribute('href').substring(1); // Get target element ID
      const targetElement = document.getElementById(targetId); // Get target element

      if (targetElement) {
        const offsetTop = targetElement.offsetTop; // Calculate offset top of the target element
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth' // Use smooth scrolling behavior
        });

        closeMenu(); // Close the menu after clicking a link
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('click');
  const menuItems = document.querySelectorAll('nav ul li a');

  // Function to close the menu
  function closeMenu() {
    menuBtn.checked = false;
  }

  // Add click event listener to each menu item
  menuItems.forEach(item => {
    item.addEventListener('click', closeMenu);
  });
});



// Slider
const sliderWrapper = document.getElementById('sliderWrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
let autoSlideInterval;

function nextSlide() {
  currentIndex = (currentIndex + 1) % sliderWrapper.children.length;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + sliderWrapper.children.length) % sliderWrapper.children.length;
  updateSlider();
}

function updateSlider() {
  const translateValue = -currentIndex * 100 + '%';
  sliderWrapper.style.transform = 'translateX(' + translateValue + ')';
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 2000); // Change the interval as needed (in milliseconds)
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Event listeners for the buttons
nextBtn.addEventListener('click', () => {
  stopAutoSlide();
  nextSlide();
});

prevBtn.addEventListener('click', () => {
  stopAutoSlide();
  prevSlide();
});

// Start automatic sliding on page load
startAutoSlide();

// Pause automatic sliding when hovering over the slider
sliderWrapper.addEventListener('mouseover', stopAutoSlide);

// Resume automatic sliding when leaving the slider
sliderWrapper.addEventListener('mouseout', startAutoSlide);




// carosel


let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// Initialize the Slick Carousel
$('.client-carousel').slick({
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Autoplay speed in milliseconds
    arrows: false, // Hide navigation arrows
    dots: false, // Hide navigation dots
    responsive: [
        {
            breakpoint: 768, // Adjust the breakpoint as needed
            settings: {
                slidesToShow: 1
            }
        }
    ]
});