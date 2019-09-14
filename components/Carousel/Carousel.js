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

function createCarousel() {
  //creating elements
  let carousel = document.createElement('div');
  let leftButton = document.createElement('div');
  let imgMtn = document.createElement('img');
  let imgPc = document.createElement('img');
  let imgTrees = document.createElement('img');
  let imgTurnTable = document.createElement('img');
  let rightButton = document.createElement('div');

  //adding classes
  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');
  imgMtn.classList.add('theImgs');
  imgPc.classList.add('theImgs');
  imgTrees.classList.add('theImgs');
  imgTurnTable.classList.add('theImgs');
  //setting content or src
  imgMtn.src = './assets/carousel/mountains.jpeg';
  imgPc.src = './assets/carousel/computer.jpeg';
  imgTrees.src = './assets/carousel/trees.jpeg';
  imgTurnTable.src = './assets/carousel/turntable.jpeg';
  leftButton.textContent = '<';
  rightButton.textContent = '>';

  //appending content
  carousel.appendChild(leftButton);
  carousel.appendChild(imgMtn);
  carousel.appendChild(imgPc);
  carousel.appendChild(imgTrees);
  carousel.appendChild(imgTurnTable);
  carousel.appendChild(rightButton);

  console.log(carousel);
  // let allTheImages = document.querySelectorAll('.theImgs');
  // console.log(allTheImages);
  return carousel;
}

let theCarousel = document.querySelector('.carousel-container');
theCarousel.appendChild(createCarousel());

let allTheImages = document.querySelectorAll('.theImgs');
console.log(allTheImages);

let clickLeftButton = document.querySelector('.left-button');
let clickRightButton = document.querySelector('.right-button');
console.log(clickLeftButton);
console.log(clickRightButton);

// allTheImages.forEach(img => {
//   console.log(img);
// });
