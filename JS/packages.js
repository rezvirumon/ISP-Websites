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
        listItem.textContent = `${item.name}: ৳${item.price.toFixed(2)}`;
        cartItems.appendChild(listItem);
        total += item.price;
      });

      // Update total
      totalElement.textContent = `Total: ৳${total.toFixed(2)}`;
    }


    
    <button onclick="addToCart('Basic Plan', 600.00)" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700">Update</button>
