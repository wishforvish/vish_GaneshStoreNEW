//to add dataLayer 
window.dataLayer = { pageName:"HomePage", userType: "Guest",};

const images = document.querySelectorAll('.category-card img');
// Loop through each image and add event listeners for zoom
images.forEach(img => {
    // Zoom in on mouse enter
    img.addEventListener('mouseenter', () => {
        img.style.transform = 'scale(1.1)'; // Zoom in by 10%
        img.style.transition = 'transform 0.3s ease';
    });
    // Zoom out on mouse leave
    img.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1)'; // Reset to original size
        img.style.transition = 'transform 0.3s ease';
    });
});

// subscribe button
function myFunction() {

  const email = document.querySelector('input[type="email"]').value;
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
  } else {
      alert("Subscription successful, Thank You!");
  }
}



//plp js

// Product data
const products = {
  aB9z: {
      title: "Esprit Ruffle Shirt",
      price: "$16.64",
      description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula.",
      image: "./images/product-01.jpg",
      category: "women",
    },
    W2xY: {
      title: "Herschel Supply",
      price: "$35.31",
      description: "Mauris consequat ornare feugiat.",
      image: "images/product-02.jpg",
      category: "women",
    },
    CdE7: {
      title: "Only Check Trouser",
      price: "$25.50",
      description: "Elegant trousers with a modern check pattern.",
      image: "images/product-03.jpg",
      category: "men",
    },
    rF5g: {
      title: "Classic Trench Coat",
      price: "$75.00",
      description: "Timeless and versatile, this trench coat is a wardrobe essential.",
      image: "images/product-04.jpg",
      category: "women",
    },
    HjK1: {
      title: "Front Pocket Jumper",
      price: "$34.75",
      description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula.",
      image: "images/product-05.jpg",
      category: "women",
    },
    LmNp: {
      title: "Vintage Inspired Classic",
      price: "$93.20",
      description: "Mauris consequat ornare feugiat.",
      image: "images/product-06.jpg",
      category: "watches",
    },
    QsT8: {
      title: "Only Check Trouser",
      price: "$25.50",
      description: "Elegant trousers with a modern check pattern.",
      image: "images/product-07.jpg",
      category: "women",
    },
    yZ0a: {
      title: "Shirt in Stretch Column",
      price: "$52.66",
      description: "Timeless and versatile, this trench coat is a wardrobe essential.",
      image: "images/product-08.jpg",
      category: "women",
    },
    bC2d: {
      title: "Converse All Star Hi Plimsolls",
      price: "$75.00",
      description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula.",
      image: "images/product-09.jpg",
      category: "shoes",
    },
    Ef3G: {
      title: "Femme T-Shirt in Stripo",
      price: "$25.85",
      description: "Mauris consequat ornare feugiat.",
      image: "images/product-10.jpg",
      category: "women",
    },
    hI4j: {
      title: "Hershell supply men",
      price: "$63.16",
      description: "Elegant trousers with a modern check pattern.",
      image: "images/product-11.jpg",
      category: "men",
    },
    Kl5M: {
      title: "Hershell supply watch",
      price: "$63.15",
      description: "Timeless and versatile, this trench coat is a wardrobe essential.",
      image: "images/product-12.jpg",
      category: "watches",
    },
    nO6p: {
      title: "T-shirt with Sleeve",
      price: "$18.49",
      description: "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula.",
      image: "images/product-13.jpg",
      category: "women",
    },
    RsV7: {
      title: "Pretty Little Thing",
      price: "$54.79",
      description: "Mauris consequat ornare feugiat.",
      image: "images/product-14.jpg",
      category: "women",
    },
    wX8y: {
      title: "Mini Silver Mesh Watch",
      price: "$86.85",
      description: "Elegant trousers with a modern check pattern.",
      image: "images/product-15.jpg",
      category: "watches",
    },
    zY9x: {
      title: "Square Neck Back",
      price: "$29.64",
      description: "Timeless and versatile, this trench coat is a wardrobe essential.",
      image: "images/product-16.jpg",
      category: "women",
    },
  };

  

// DOM elements
const navLinks = document.querySelectorAll('.nav-links a');
const productGrid = document.querySelector('.product-grid');

// Function to render products
function renderProducts(category) {
  console.log(category);
  productGrid.innerHTML = ''; // Clear the grid
  
  // Loop through products and filter by category
  Object.entries(products).forEach(([id, product]) => {
    if (category === 'all' || product.category === category) {
      const productCard = `
        <div class="product-card">
          <a href="index2.html?id=${id}">
            <img src="${product.image}" alt="${product.title}" class="product-image" />
            <div class="product-info">
              <div class="title-row">
                <span class="product-title">${product.title}</span>
                <span class="heart-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                  </svg>
                </span>
              </div>
              <span class="product-price">${product.price}</span>
            </div>
          </a>
        </div>
      `;
      productGrid.innerHTML += productCard;
    }
  });
}

// Event listener for category links
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    const category = link.getAttribute('data-category'); // Get category from data attribute
    renderProducts(category); // Render filtered products
  });
});

// Initial rendering of all products
renderProducts('all');

window.dataLayer = { 
    pageName: "shop",
    pageView:"shop",
    userType: "Guest",
    userID:"8C2811a503C7c5a",
    PageTitle:document.title,
    timestamp:new Date().toString(),
    pageUrl:window.location.href,
    categoryId:"plp",
  };

  !(function (e,a,n,t) {
    if (a) return;
    var i=e.head;
    if(i){
      var o=e.createElement("style");
      (o.id="alloy-prehiding"),
      i.appendChild(o),
      setTimeout(function(){
        o.parentNode && o.parentNode.removeChild(o);
      },t);
    }
  })(
    document,
    document.location.href.indexOf("adobe_authoring_enabled")!==-1,
    "body {opacity:0 !important}",
    3000
  );





  
//cart icon dynamic 
document.addEventListener("DOMContentLoaded", () => {
  const cartCountElement = document.getElementById('cart-count');

  function updateCartCount() {
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      const itemCount = cartItems.length;
      cartCountElement.textContent = itemCount;
  }

  updateCartCount(); // Initial update

  // Example addToCart function (call this from your add to cart logic)
  function addToCart(item) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(item);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount(); // Crucial: Update AFTER local storage is modified
  }

   // Example removeFromCart function (call this from your remove logic)
  function removeFromCart(index) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCartCount(); // Crucial: Update AFTER local storage is modified
  }

});








