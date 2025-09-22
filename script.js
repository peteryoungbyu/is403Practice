// Random Pet Facts
const petFacts = [
    "Dogs can learn more than 1000 words!",
    "Cats sleep for about 70% of their lives.",
    "Hamsters’ teeth never stop growing.",
    "Dogs’ noses are as unique as human fingerprints.",
    "Some turtles can breathe through their butts!"
];

document.getElementById("fact-btn").addEventListener("click", () => {
    const randomFact = petFacts[Math.floor(Math.random() * petFacts.length)];
    document.getElementById("pet-fact").textContent = randomFact;
});

// Add to Cart Functionality
let cartCount = 0;
const cartDisplay = document.getElementById("cart-count");
const buttons = document.querySelectorAll(".add-to-cart");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartDisplay.textContent = cartCount;
        alert("Pet added to cart! 🐾");
    });
});