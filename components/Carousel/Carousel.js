/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector(".carousel-container");

function imageCarousel() {
  const carouselMain = document.createElement("div");
  const leftButton = document.createElement("div");
  const rightButton = document.createElement("div");
  const imageOne = document.createElement("img");
  const imageTwo = document.createElement("img");
  const imageThree = document.createElement("img");
  const imageFour = document.createElement("img");

  carouselMain.classList.add("carousel");
  leftButton.classList.add("left-button");
  rightButton.classList.add("right-button");
  imageOne.classList.add("carousel-img");
  imageTwo.classList.add("carousel-img");
  imageThree.classList.add("carousel-img");
  imageFour.classList.add("carousel-img");

  carouselMain.appendChild(leftButton);
  carouselMain.appendChild(imageOne);
  carouselMain.appendChild(imageTwo);
  carouselMain.appendChild(imageThree);
  carouselMain.appendChild(imageFour);
  carouselMain.appendChild(rightButton);

  imageOne.setAttribute("src", "assets/computer.jpeg");
  imageTwo.setAttribute("src", "assets/mountains.jpeg");
  imageThree.setAttribute("src", "assets/trees.jpeg");
  imageFour.setAttribute("src", "assets/turntable.jpeg");

  return carouselMain;
}

carouselContainer.prepend(imageCarousel());

const slides = Array.from(imageCarousel());
console.log(slides);
