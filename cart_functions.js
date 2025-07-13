// cart_functions.js

// Function to get current cart items from localStorage
function getCartItems() {
    const cartItemsString = localStorage.getItem('cartItems');
    return cartItemsString ? JSON.parse(cartItemsString) : [];
}

// Function to save cart items to localStorage
function saveCartItems(cartItems) {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

/**
 * Adds a product to the cart or updates its quantity if already present.
 * This function is designed to be robust and accept a full product object
 * with all necessary details for persistence.
 *
 * @param {object} productObj - The complete product object (from products_data.js or custom-generated).
 * Must contain at least `serial_no`, `name`, and `price`.
 * @param {number} quantity - The quantity to add.
 * @param {string} [size='N/A'] - The selected size/variant of the product (e.g., "1.5 Ton", "55 Inch", "10ft").
 * Defaults to 'N/A' if no size option.
 * @param {string} [unit='unit'] - The unit of the product (e.g., "unit", "meter", "kg").
 * Defaults to 'unit'.
 */
function addToCart(productObj, quantity, size = 'N/A', unit = 'unit') {
    console.log('--- Calling addToCart (from cart_functions.js) ---');
    console.log('Product Object received:', productObj);
    console.log('Quantity:', quantity, 'Size:', size, 'Unit:', unit);

    // Ensure essential properties are always present for saving
    const serial_no = productObj.serial_no || 'UNKNOWN_SN';
    const name = productObj.name || 'Unknown Product';
    const price = productObj.price || '₹0.00'; // Ensure price is a string in formatted currency
    const type = productObj.type || 'N/A';
    const finalUnit = unit || productObj.unit || 'unit'; // Prioritize passed unit, then productObj's unit, then default

    let cartItems = getCartItems();
    const uniqueCartItemId = `${serial_no}-${size}`; // Unique identifier for variant

    const existingItemIndex = cartItems.findIndex(item => `${item.serial_no}-${item.size}` === uniqueCartItemId);

    if (existingItemIndex > -1) {
        cartItems[existingItemIndex].quantity += quantity;
    } else {
        const itemToSave = {
            serial_no: serial_no,
            name: name,
            price: price, 
            type: type,
            unit: finalUnit,
            quantity: quantity,
            size: size, // Passed size (from product detail page size selector or default)

            // Include all other relevant properties from the product schema for persistence
            "AC-TR": productObj["AC-TR"] || null,
            "AC-Type": productObj["AC-Type"] || null,
            "AC-STAR": productObj["AC-STAR"] || null,
            description: productObj.description || '',
            rating_stars: productObj.rating_stars || null,
            rating_source_icon: productObj.rating_source_icon || null,
            has_size_option: productObj.has_size_option || false, 
            available_sizes: productObj.available_sizes || null,    
            price_size: productObj.price_size || null              
        };
        cartItems.push(itemToSave);
    }
    console.log('Item to save (final object before stringify):', itemToSave); 
    console.log('Cart items BEFORE saving to localStorage:', cartItems);
    saveCartItems(cartItems); // Save the updated cart to localStorage
    console.log('Cart items AFTER saving to localStorage:', JSON.parse(localStorage.getItem('cartItems')));

    // Use a custom message box instead of alert() for better UX
    displayMessageBox(`Added ${quantity} ${itemToSave.unit} of ${itemToSave.name} (Size: ${itemToSave.size}) to cart!`);

    // Removed direct call to renderCart here. Pages including this script will call renderCart themselves.
}


// Function to remove an item from the cart
function removeItemFromCart(serialNo, size) {
    let cartItems = getCartItems();
    cartItems = cartItems.filter(item => !(item.serial_no === serialNo && item.size === size));
    saveCartItems(cartItems);
    // Removed direct call to renderCart here. The cart page will call renderCart.
}

// Function to update an item's quantity in the cart
function updateCartItemQuantity(serialNo, size, newQuantity) {
    let cartItems = getCartItems();
    const itemIndex = cartItems.findIndex(item => item.serial_no === serialNo && item.size === size);
    if (itemIndex > -1) {
        cartItems[itemIndex].quantity = parseInt(newQuantity, 10);
        if (cartItems[itemIndex].quantity <= 0) {
            removeItemFromCart(serialNo, size); // If quantity is 0 or less, remove item
        } else {
            saveCartItems(cartItems);
            // Removed direct call to renderCart here. The cart page will call renderCart.
        }
    }
}

// Custom message box display function (to replace alert())
function displayMessageBox(message) {
    let messageBox = document.getElementById('customMessageBox');
    if (!messageBox) {
        messageBox = document.createElement('div');
        messageBox.id = 'customMessageBox';
        messageBox.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #4CAF50; /* Green */
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
            font-family: 'Poppins', sans-serif;
            text-align: center;
        `;
        document.body.appendChild(messageBox);
    }
    messageBox.textContent = message;
    messageBox.style.opacity = 1;

    setTimeout(() => {
        messageBox.style.opacity = 0;
        // Optionally remove after transition to clean up DOM
        setTimeout(() => {
            if (messageBox.parentNode) {
                messageBox.parentNode.removeChild(messageBox);
            }
        }, 500); // Match transition duration
    }, 3000); // Message visible for 3 seconds
}

