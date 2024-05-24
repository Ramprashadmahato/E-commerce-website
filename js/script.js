//data for the vegetables section
const vegetables = [
  {
    name: "Tomato",
    description:
      "Tomatoes are juicy, red fruits commonly used as vegetables in cooking.",
    price: 30,
    image: "../images/products/veg1.jpg",
  },
  {
    name: "Potato",
    description:
      "Potatoes are starchy tuberous crops and are nutrient-dense to boot",
    price: 40,
    image: "../images/products/veg2.jpg",
  },
  {
    name: "Cauliflower",
    description:
      "Cauliflower is a cruciferous vegetable that is naturally high in fiber and B-vitamins.",
    price: 60,
    image: "../images/products/veg3.jpg",
  },
  {
    name: "Cabbage",
    description:
      "Cabbage is a leafy green or red plant grown as an annual vegetable crop for its dense-leaved heads.",
    price: 50,
    image: "../images/products/veg4.jpg",
  },
  {
    name: "Carrot",
    description:
      "Carrots are root vegetables that are often claimed to be the perfect health food.",
    price: 35,
    image: "../images/products/veg5.jpg",
  },
  {
    name: "Spinach",
    description:
      "Spinach is a leafy green flowering plant native to central and western Asia.",
    price: 45,
    image: "../images/products/veg6.jpg",
  },
  {
    name: "Bell Pepper",
    description:
      "Bell peppers are sometimes grouped with less pungent pepper varieties as sweet peppers.",
    price: 70,
    image: "../images/products/veg7.jpg",
  },
  {
    name: "Onion",
    description: "Onions are underground bulbs related to garlic and leeks.",
    price: 25,
    image: "../images/products/veg8.jpg",
  },
];

//data for the meat products section
const meatProducts = [
  {
    name: "Chicken Breast",
    description: "Lean and protein-rich chicken breast",
    price: 400,
    image: "../images/products/frozen1.jpg",
  },
  {
    name: "Beef Steak",
    description: "Juicy and tender beef steak",
    price: 600,
    image: "../images/products/frozen2.jpg",
  },
  {
    name: "Pork Chops",
    description: "Flavorful and succulent pork chops",
    price: 450,
    image: "../images/products/frozen3.jpg",
  },
  {
    name: "Lamb Leg",
    description: "Tender and aromatic lamb leg",
    price: 700,
    image: "../images/products/frozen4.jpg",
  },
  {
    name: "Turkey Breast",
    description: "Lean and nutritious turkey breast",
    price: 500,
    image: "../images/products/frozen5.jpg",
  },
  {
    name: "Duck Breast",
    description: "Rich and flavorful duck breast",
    price: 550,
    image: "../images/products/frozen6.jpg",
  },
  {
    name: "Salmon Fillet",
    description: "Omega-3 rich and delicious salmon fillet",
    price: 800,
    image: "../images/products/frozen7.jpg",
  },
  {
    name: "Tuna Steak",
    description: "Lean and protein-packed tuna steak",
    price: 650,
    image: "../images/products/frozen8.jpg",
  },
];

//data for the dairy products section
const dairybakery = [
  {
    name: "Milk",
    description: "Fresh and creamy cow's milk",
    price: 80,
    image: "../images/products/dairy1.jpg",
  },
  {
    name: "Cream Cheese",
    description: "Smooth and creamy cream cheese",
    price: 180,
    image: "../images/products/dairy2.jpg",
  },
  {
    name: "Cheese",
    description: "Variety of flavorful cheeses",
    price: 150,
    image: "../images/products/dairy3.jpg",
  },
  {
    name: "Butter",
    description: "Rich and creamy butter",
    price: 120,
    image: "../images/products/dairy4.jpg",
  },
  {
    name: "Bread",
    description: "Freshly baked bread loaf",
    price: 50,
    image: "../images/products/dairy5.jpg",
  },
  {
    name: "Croissant",
    description: "Flaky and buttery croissant",
    price: 70,
    image: "../images/products/dairy6.jpg",
  },
  {
    name: "Cake",
    description: "Delicious and indulgent cake",
    price: 200,
    image: "../images/products/dairy7.jpg",
  },
  {
    name: "Cookies",
    description: "Crunchy and sweet cookies",
    price: 80,
    image: "../images/products/dairy8.jpg",
  },
];

const ratingsImages = [
  "../images/products/rating-stars-1.png",
  "../images/products/rating-stars-2.png",
  "../images/products/rating-stars-3.png",
  "../images/products/rating-stars-4.png",
  "../images/products/rating-stars-5.png",
];

// image slider

let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
initializeSlider();

function initializeSlider() {
  slides[slideIndex].classList.add("slide-visible");
  setInterval(nextSlide, 3000);
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides[slideIndex].classList.add("slide-visible");
}

function prevSlide() {
  slides[slideIndex].classList.remove("slide-visible");
  slideIndex--;
  showSlide(slideIndex);
}
function nextSlide() {
  slides[slideIndex].classList.remove("slide-visible");
  slideIndex++;
  showSlide(slideIndex);
}

//Function to create all the cards for given data and elementID where the cards will be rendered at.
function createCards(items, elementId) {
  const element = document.getElementById(elementId);

  //Mapping through the data to generate HTML for each card for given data and storing them inside then array "cards".
  const cards = items.map((item) => {
    return `<div class="card">
        <a href="showcase.html"><img class="card-image" src="${item.image}"></a>
        <div class="card-contents">
        <div class="info">
            <h3>${item.name}</h3>
            <p class = "desc">${item.description}</p>
        </div>
        <div class="cardfooter">
            <div class="pricingdetails">
                <h6 class="price"><span>Rs.</span>${item.price}</h6>
                <img class="rate" src="${
                  ratingsImages[Math.floor(Math.random() * 4)]
                }">
            </div>
        <button class="b1"> Buy </button>
        </div>
        </div>
    </div>`;
  });

  //Since we cannot pass array directly to HTML, we have to join all the cards' HTML into a single string.
  element.innerHTML = cards.join("");
}

createCards(vegetables, "vegetables");
createCards(meatProducts, "meat-Products");
createCards(dairybakery, "dairy-bakery");
