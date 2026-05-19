const products = [

    {
        name: "Wireless Headphones",
        price: 99,
        rating: "⭐⭐⭐⭐⭐",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },

    {
        name: "Smart Watch",
        price: 149,
        rating: "⭐⭐⭐⭐",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },

    {
        name: "Gaming Keyboard",
        price: 79,
        rating: "⭐⭐⭐⭐⭐",
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"
    },

    {
        name: "Laptop",
        price: 899,
        rating: "⭐⭐⭐⭐",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    }

];

const productGrid = document.getElementById("productGrid");

const cartCount = document.getElementById("cartCount");

const totalPrice = document.getElementById("totalPrice");

const cartItems = document.getElementById("cartItems");

let cart = [];

products.forEach(product => {

    let card = document.createElement("div");

    card.classList.add("product-card");

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">

        <h3>${product.name}</h3>

        <p class="price">$${product.price}</p>

        <p class="rating">${product.rating}</p>

        <button onclick="addToCart('${product.name}')">
            Add to Cart
        </button>
    `;

    productGrid.appendChild(card);
});

function addToCart(productName) {

    let product = products.find(p => p.name === productName);

    cart.push(product);

    updateCart();
}

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}

function updateCart() {

    cartCount.innerText = cart.length;

    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {

        total += item.price;

        let li = document.createElement("li");

        li.innerHTML = `
            ${item.name} - $${item.price}

            <button class="remove-btn"
                    onclick="removeFromCart(${index})">
                Remove
            </button>
        `;

        cartItems.appendChild(li);
    });

    totalPrice.innerText = total;
}