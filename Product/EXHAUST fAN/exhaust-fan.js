const products = [
    {
        title: "Exhaust Fan",
        description: "Our sleek ceiling fan combines style and functionality.",
        price: "$40",
        image: "https://i.pinimg.com/474x/e0/95/66/e095666d69f6bf54915219b9fda1ef46.jpg",
        ratings: "(130 ratings)",
    },
    {
        title: "Exhaust Fan",
        description: "Cool down and brighten up your space effortlessly.",
        price: "$34",
        image: "https://i.pinimg.com/564x/68/7e/83/687e8307b5d20c6db2979e11694e9445.jpg",
        ratings: "(139 ratings)",
    },
    {
        title: "Exhaust Fan",
        description: "Crafted for comfort, designed for delight.",
        price: "$40",
        image: "https://i.pinimg.com/474x/20/4d/cd/204dcd82daa2c51082b900892bf9196f.jpg",
        ratings: "(150 ratings)",
    }, {
        title: "Exhaust Fan",
        description: "A perfect blend of functionality and design.",
        price: "$37",
        image: "https://i.pinimg.com/474x/08/9c/6c/089c6c0111b84749a3c6dc925663bc0d.jpg",
        ratings: "(144 ratings)",
    },
    {
        title: "Exhaust Fan",
        description: "Experience a breath of fresh air in style.",
        price: "$35",
        image: "https://i.pinimg.com/474x/59/03/66/590366de0092e385410bb3c4b9a348c1.jpg",
        ratings: "(126 ratings)",
    },
    {
        title: "Exhaust Fan",
        description: "Breathe easy and chill out in style.",
        price: "$37",
        image: "https://i.pinimg.com/736x/20/4d/cd/204dcd82daa2c51082b900892bf9196f.jpg",
        ratings: "(143 ratings)",
    },
    {
        title: "Exhaust Fan",
        description: "Feel the flow while enhancing your decor!",
        price: "$40",
        image: "https://i.pinimg.com/474x/09/0c/18/090c18991a24003418312fa68c464c54.jpg",
        ratings: "(139 ratings)",
    }, {
        title: "Exhaust Fan",
        description: "Our exhaust ceiling fan combines style and functionality.",
        price: "$37",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ5wL1w_LB6a4L4FRwGNWKQobIerYnFBm1MQ&s",
        ratings: "(140 ratings)",
    }, {
        title: "Exhaust Fan",
        description: "Stay cool and comfortable with our stylish ceiling fan!",
        price: "$45",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfykANWH-MbMXTnWYiWB_BlD3sp_H-sqifWg&s",
        ratings: "(127 ratings)",
    },
    {
        title: "Exhaust Fan",
        description: "Beat the heat with our chic ceiling fans.",
        price: "$39",
        image: "https://i.pinimg.com/474x/4f/65/4f/4f654f6f872e7873192df0f372789b2d.jpg",
        ratings: "(133 ratings)",
    },
    {
        title: "Exhaust Fan",
        description: "Stay refreshed and stylish with every spin..",
        price: "$42",
        image: "https://i.pinimg.com/564x/02/72/98/027298d57a385331b1e6e7bf2b14b768.jpg",
        ratings: "(137 ratings)",
    },
    {
        title: "Exhaust Fan",
        description: "Circulate comfort and charm in any room",
        price: "$40",
        image: "https://i.pinimg.com/474x/56/c7/2c/56c72c8dd8430488357a4888c7d96ae3.jpg",
        ratings: "(142 ratings)",
    },
    {
        title: "Exhaust Fan",
        description: "Effortless style and cooling comfort in one",
        price: "$38",
        image: "https://i.pinimg.com/564x/08/38/5b/08385bf594258a71aacc49379e8de7a1.jpg",
        ratings: "(135 ratings)",
    },
    {
        title: "Exhaust Fan",
        description: "Our sleek ceiling fan combines style and functionality.",
        price: "$36",
        image: "https://i.pinimg.com/564x/65/1f/6e/651f6e79fbeb3763a1c53adf1a92d2ee.jpg",
        ratings: "(125 ratings)",
    },
    
    {
        title: "Exhaust Fan",
        description: "Cool down and brighten up your space effortlessly.",
        price: "$44",
        image: "https://i.pinimg.com/564x/02/77/5d/02775d1d344ebb7a99c2d56d306efb7f.jpg",
        ratings: "(130 ratings)",
    },
];



const cardcontainer1 = document.getElementById('card-container1');
products.forEach((products, index) => {
    cardcontainer1.innerHTML += `
      
            <div class="product-card">
                <div class="image-container1">
                    <img src="${products.image}">
                    <span class="favorite-star">❤</span>
                </div>
                <div class="product-info">
                    <h2>${products.title}</h2>
                    <p>${products.description}</p>
                    <div class="price-order">
                        <span class="price">${products.price}</span>
                        <button class="details" data-index = "${index}">Details</button>
                    </div>
                </div>
            </div>
        `;

});

// click event for favorite-card 
function showToast(message) {
    const toast = document.getElementById('sample-toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000); 
}

document.addEventListener('DOMContentLoaded', () => {
    let favoriteStar = document.querySelectorAll('.favorite-star');
    favoriteStar.forEach(star => {
        star.addEventListener('click', function () {
            this.classList.toggle('active');
            if (this.classList.contains('active')) {
                showToast("Added to your favorites! ❤️");
            } else {
                showToast("Removed from favorites. 💔");
            }
        });
    });
});

// click event to open modal popup 

let detailsBtn = document.querySelectorAll('.details')

detailsBtn.forEach(button => {
    button.addEventListener('click', () => {
        const index = button.getAttribute('data-index');
        openModal(products[index]);
    });
});


const modalcontainer1 = document.querySelector('.container1-description');
const modal = document.querySelector('.container1');
const modalImage = document.querySelector('.product-img img');
const modalTitle = document.querySelector('.description-part h2');
const modalPrice = document.querySelector('.description-part .price');
const modalDescription = document.querySelector('.img-description');
const modalRatings = document.querySelector('.ratings-count');
const crossIcon = document.getElementById('cross-icon');

// Open modal function
function openModal(product) {
    modalImage.src = product.image;
    modalTitle.textContent = product.title;
    modalPrice.textContent = product.price;
    modalDescription.textContent = product.description;
    modalRatings.textContent = product.ratings;
    modalcontainer1.classList.add('active');
    document.body.classList.add('blur-background')

}

// Close modal function
function closeModal() {
    modalcontainer1.classList.remove('active');
    document.body.classList.remove('blur-background')
    
}

// Cross icon click event
crossIcon.addEventListener('click', closeModal);

// click event for addd-to-cart-button
let cartBtn = document.querySelector('#cart-btn')
cartBtn.addEventListener('click',() => {
    alert("Got it! Your item has been added to the cart 🛒")
})