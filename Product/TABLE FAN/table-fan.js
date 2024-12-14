const products = [

    {
        title: "Table Fan",
        description: "Our sleek table fan combines style and functionality.",
        price: "$25",
        image: "https://i.pinimg.com/originals/5a/6b/92/5a6b929ce05b269dd2e6a005f6e2fc36.gif",
        modalImg: "https://i.pinimg.com/564x/31/52/0a/31520ad521771103d5f01cd8e379a407.jpg"
    },
    {
        title: "Table Fan",
        description: "Cool down and brighten up your space effortlessly.",
        price: "$28",
        image: "https://i.pinimg.com/originals/00/ca/f1/00caf195e7af2cf94413a12661362406.gif",
        modalImg: "https://i.pinimg.com/474x/b3/5e/f4/b35ef42e2dd18bf134b301513466a97b.jpg"
    },
    {
        title: "Table Fan",
        description: "A perfect blend of functionality and design.",
        price: "$26",
        image: "https://cdn.dribbble.com/users/713272/screenshots/4892029/fan_linked_comp_8.gif",
        modalImg: "https://i.pinimg.com/474x/20/8b/e3/208be32c5d5c8ccf3e72d6761c529600.jpg"
    },
    {
        title: "Table Fan",
        description: "Experience a breath of fresh air in style.",
        price: "$22",
        image: "https://cdn.dribbble.com/users/1036957/screenshots/2433112/mybiggestfan.gif",
        modalImg: "https://i.pinimg.com/474x/8c/70/01/8c7001af6679fd0a617a02c91c720482.jpg"
    },
    {
        title: "Table Fan",
        description: "Crafted for comfort, designed for delight.",
        price: "$21",
        image: "https://cdn.dribbble.com/users/1835572/screenshots/4722655/fengshan.gif",
        modalImg: "https://i.pinimg.com/564x/0e/6c/45/0e6c45fc109cb10577014b9925b65a93.jpg"
    },
    {
        title: "Table Fan",
        description: "Breathe easy and chill out in style.",
        price: "$23",
        image: "https://i.pinimg.com/originals/b6/1d/b7/b61db778073552f8761af75a486787d5.gif",
        modalImg: "https://i.pinimg.com/474x/5c/f4/c4/5cf4c48cf49e14208b39ee1ae0a69247.jpg"
    },
    {
        title: "Table Fan",
        description: "Feel the flow while enhancing your decor!",
        price: "$25",
        image: "https://media.tenor.com/DW7uAl7rCc4AAAAd/ventilador.gif",
        modalImg: "https://i.pinimg.com/474x/77/40/12/774012bc52b5f61373d65893cdd35eac.jpg"
    },
    {
        title: "Table Fan",
        description: "Our sleek table fan combines style and functionality.",
        price: "$23",
        image: "https://cdn.dribbble.com/users/2281147/screenshots/4830665/___.gif",
        modalImg: "https://i.pinimg.com/564x/99/41/4a/99414a0af07df4d6917389f3a0bcbfe7.jpg"
    },
    {
        title: "Table Fan",
        description: "Experience a breath of fresh air in style.",
        price: "$24",
        image: "https://i.pinimg.com/originals/8f/05/38/8f05381e6baf5d306e03634eaef45c6c.gif",
        modalImg: "https://i.pinimg.com/474x/07/0d/cf/070dcf09f29e7513fa2f1d1624213948.jpg"
    },
    {
        title: "Table Fan",
        description: "Stay refreshed and stylish with every spin..",
        price: "$24",
        image: "https://cdn.dribbble.com/users/1570263/screenshots/15470387/media/06b78fd52f1a9935ed8633c8d21949d7.gif",
        modalImg: "https://i.pinimg.com/564x/36/09/f5/3609f5a0223111b004cf69608a2032b5.jpg"
    },
    {
        title: "Table Fan",
        description: "Stay cool and comfortable with our stylish ceiling fan!",
        price: "$27",
        image: "https://bokettowellness.com/cdn/shop/articles/HRT-contenful.gif?v=1684190199",
        modalImg: "https://i.pinimg.com/474x/fa/d9/03/fad903b7e90fa7ff0f65d964def892e5.jpg"
    },
    {
        title: "Table Fan",
        description: "Beat the heat with our chic ceiling fans.",
        price: "$21",
        image: "https://i.pinimg.com/originals/2f/78/cb/2f78cbb5a66140c4f953c4ea0a07bbf0.gif",
        modalImg: "https://i.pinimg.com/474x/20/8b/e3/208be32c5d5c8ccf3e72d6761c529600.jpg"
    },
    {
        title: "Table Fan",
        description: "Circulate comfort and charm in any room",
        price: "$22",
        image: "https://cdn.dribbble.com/users/435687/screenshots/4131415/spinningfasterererer_12.gif",
        modalImg: "https://i.pinimg.com/564x/ee/63/6b/ee636b11cb4d58d30ff95936954be2b3.jpg"
    },
    {
        title: "Table Fan",
        description: "Cool down and brighten up your space effortlessly.",
        price: "$25",
        image: "https://cdna.artstation.com/p/assets/images/images/023/955/940/original/sebastian-langhoff-vintage-fan02.gif?1580858264",
        modalImg: "https://i.pinimg.com/564x/c6/d8/64/c6d8649265256224d06e3046bbc0bcdf.jpg"
    },
    {
        title: "Table Fan",
        description: "Effortless style and cooling comfort in one",
        price: "$20",
        image: "https://i.pinimg.com/originals/56/f1/96/56f196436fd1a90991c5450c02206de7.gif",
        modalImg: "https://i.pinimg.com/564x/20/e4/0f/20e40f34ca509bcc7088216352e0cfdd.jpg"
    }
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
    modalImage.src = product.modalImg;
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