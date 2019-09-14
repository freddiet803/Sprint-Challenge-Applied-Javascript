// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

let mainHeader = document.querySelector('.header-container');
function Header() {
  //creating html elements
  let header = document.createElement('div');
  let spanDate = document.createElement('span');
  let h1 = document.createElement('h1');
  let spanTemp = document.createElement('span');

  //adding classes to elements
  header.classList.add('header');
  spanDate.classList.add('date');
  spanTemp.classList.add('temp');

  //appending elements to header div
  header.appendChild(spanDate);
  header.appendChild(h1);
  header.appendChild(spanTemp);

  //static content
  spanDate.textContent = 'March 28, 2019';
  h1.textContent = 'Lambda Times';
  spanTemp.textContent = '98' + String.fromCharCode(176);

  return header;
}

mainHeader.appendChild(Header());

