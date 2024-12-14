const products = [

    {
        title: "Stand Fan",
        description: "Our sleek ceiling fan combines style and functionality.",
        price: "$25",
        image: "https://i.pinimg.com/564x/be/d0/f6/bed0f6dc9a4fdf0da3fdc81a5b594e9d.jpg",
        ratings: "(144 ratings)",
    },
    {
        title: "Stand Fan",
        description: "Crafted for comfort, designed for delight.",
        price: "$21",
        image: "https://i.pinimg.com/564x/ad/16/06/ad1606f9bc4b1bda3e18538a66728c85.jpg",
        ratings: "(128 ratings)",
    }, 
    {
        title: "Stand Fan",
        description: "Cool down and brighten up your space effortlessly.",
        price: "$28",
        image: "https://i.pinimg.com/564x/46/9d/1d/469d1d82db98bde1d633ba718bca261f.jpg",
        ratings: "(133 ratings)",
    },
    {
        title: "Stand Fan",
        description: "Breathe easy and chill out in style.",
        price: "$23",
        image: "https://i.pinimg.com/474x/9d/a3/70/9da3708ff72e2682ea73654f49a000e1.jpg",
        ratings: "(129 ratings)",
    },
    {
        title: "Stand Fan",
        description: "Experience a breath of fresh air in style.",
        price: "$22",
        image: "https://i.pinimg.com/474x/d3/fe/73/d3fe7313878f3b73aa28073553f11ca1.jpg",
        ratings: "(139 ratings)",
    },
    {
        title: "Stand Fan",
        description: "A perfect blend of functionality and design.",
        price: "$26",
        image: "https://i.pinimg.com/474x/b4/01/e4/b401e4f8e66d1c4b4b4e807e01299079.jpg",
        ratings: "(134 ratings)",
    },
    {
        title: "Stand Fan",
        description: "Our sleek ceiling fan combines style and functionality.",
        price: "$24",
        image: "https://i.pinimg.com/474x/db/84/ce/db84cef3c40e88a459f9a8507e255cef.jpg",
        ratings: "(140 ratings)",
    },
    {
        title: "Stand Fan",
        description: "Feel the flow while enhancing your decor!",
        price: "$25",
        image: "https://i.pinimg.com/474x/cf/75/93/cf75936cec043b3f3d0329ca033b580d.jpg",
        ratings: "(150 ratings)",
    },
    {
        title: "Stand Fan",
        description: "Beat the heat with our chic ceiling fans.",
        price: "$21",
        image: "https://i.pinimg.com/564x/5a/a7/9b/5aa79b785fad6f7f31ceb31ad225c4c2.jpg",
        ratings: "(129 ratings)",
    },
    {
        title: "Stand Fan",
        description: "Stay cool and comfortable with our stylish ceiling fan!",
        price: "$27",
        image: "https://i.pinimg.com/474x/a8/17/61/a81761ebc50bf7e7644c62173a8675a1.jpg",
        ratings: "(143 ratings)",
    },
    {
        title: "Stand Fan",
        description: "Stay refreshed and stylish with every spin..",
        price: "$24",
        image: "https://i.pinimg.com/474x/2c/e8/6c/2ce86cf42abc5f3888a6e5d690fc3107.jpg",
        ratings: "(140 ratings)",
    },
    {
        title: "Stand Fan",
        description: "Circulate comfort and charm in any room",
        price: "$22",
        image: "https://i.pinimg.com/564x/3d/61/15/3d6115c6344c0340e19fcbfcd698f103.jpg",
        ratings: "(145 ratings)",
    },
    {
        title: "Stand Fan",
        description: "Effortless style and cooling comfort in one",
        price: "$20",
        image: "https://i.pinimg.com/564x/3b/a5/47/3ba547d4c63f61b038f2f31c78807c60.jpg",
        ratings: "(137 ratings)",
    },
    {
        title: "Stand Fan",
        description: "Our sleek ceiling fan combines style and functionality.",
        price: "$23",
        image: "https://i.pinimg.com/564x/ac/fe/3e/acfe3eea234423c4268f8e4d7dafa7db.jpg",
        ratings: "(135 ratings)",
    },
    {
        title: "Stand Fan",
        description: "Cool down and brighten up your space effortlessly.",
        price: "$25",
        image: "https://i.pinimg.com/564x/9c/16/9c/9c169caaddeb644f5e44ba345d5e212d.jpg",
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
