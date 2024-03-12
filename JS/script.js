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


// Internet Packages

let cart = [];

    function addToCart(packageName, price) {
      // Check if the package is already in the cart
      const existingItem = cart.find(item => item.name === packageName);

      if (existingItem) {
        // Update the existing item
        existingItem.price = price;
      } else {
        // Add the new item to the cart
        cart.push({ name: packageName, price: price });
      }

      updateCart();
    }

    function updateCart() {
      const cartItems = document.getElementById('cart-items');
      const totalElement = document.getElementById('total');
      let total = 0;

      // Clear existing items
      cartItems.innerHTML = '';

      // Update cart items
      cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name}: $${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
        total += item.price;
      });

      // Update total
      totalElement.textContent = `Total: $${total.toFixed(2)}`;
    }