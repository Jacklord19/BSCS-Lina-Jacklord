let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add items to the cart
function addToCart(itemName, itemPrice) {
    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.quantity += 1;  // If it exists, just increment the quantity
    } else {
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });  // Otherwise, add it as a new item
    }

    // Update the cart display and show the cart if it's hidden
    updateCartDisplay();
    toggleCart(); // Automatically show the cart when an item is added
    saveCartToLocalStorage();  // Save the cart to local storage
}

// Function to remove an item from the cart
function removeFromCart(itemName) {
    const index = cart.findIndex(item => item.name === itemName);
    if (index !== -1) {
        cart.splice(index, 1);  // Remove the item from the cart
    }
    updateCartDisplay();
    saveCartToLocalStorage();  // Save the cart to local storage
}

// Function to update the cart display
function updateCartDisplay() {
    const cartList = document.getElementById('cart-list');
    const cartMessage = document.getElementById('cart-message');
    const cartTotal = document.getElementById('cart-total');
    const itemCount = document.getElementById('item-count');

    // Clear the cart list before updating
    cartList.innerHTML = '';

    let totalPrice = 0;
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ₱${item.price} x ${item.quantity}`;
        
        // Add a remove button for each item
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(item.name);
        
        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
        totalPrice += item.price * item.quantity;
    });

    // Update the item count and total price
    itemCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    cartTotal.textContent = `Total: ₱${totalPrice.toFixed(2)}`;

    // Show a message if the cart is empty
    if (cart.length === 0) {
        cartMessage.textContent = 'Your cart is empty.';
    } else {
        cartMessage.textContent = 'You have items in your cart.';
    }
}

// Function to save the cart data to local storage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));  // Save the cart as a JSON string
}

// Function to place the order
function placeOrder() {
    const address = document.getElementById('address').value;

    if (cart.length === 0) {
        alert('Your cart is empty. Please add items to the cart.');
        return;
    }

    if (!address) {
        alert('Please enter your delivery address.');
        return;
    }

    // Generate order summary
    let orderSummary = `You have ${cart.reduce((total, item) => total + item.quantity, 0)} items in your cart.\n`;
    cart.forEach(item => {
        orderSummary += `${item.name} - ₱${item.price} x ${item.quantity}\n`;
    });
    orderSummary += `Total price: ₱${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}\n`;
    orderSummary += `Delivery address: ${address}`;

    // Ask for confirmation before placing the order
    const confirmOrder = confirm(orderSummary + '\n\nDo you want to place the order?');

    if (confirmOrder) {
        // Order confirmation
        alert(`Order placed successfully!\nYour items will be delivered to: ${address}`);

        // Clear the cart after placing the order
        cart = [];
        updateCartDisplay();  // Update the cart display after clearing
        saveCartToLocalStorage();  // Remove cart data from local storage
    }
}

// Toggle cart visibility with animation
function toggleCart() {
    const cartElement = document.getElementById('cart');
    cartElement.classList.toggle('show');
}

// Initialize cart display on page load
window.onload = updateCartDisplay;
