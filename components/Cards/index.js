// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(cardObject) {
  //creating elements
  let card = document.createElement('div');
  let headline = document.createElement('div');
  let author = document.createElement('div');
  let imgContainer = document.createElement('div');
  let theImg = document.createElement('img');
  let theSpanAuthorsName = document.createElement('span');

  //adding classes to elements
  card.classList.add('card');
  headline.classList.add('headlline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  //setting content of elements
  headline.textContent = cardObject.headline;
  theImg.src = cardObject.authorPhoto;
  theSpanAuthorsName.textContent = cardObject.authorName;

  //appending elements to card
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(theImg);
  author.appendChild(theSpanAuthorsName);

  return card;
}

makeAllCards = async url => {
  try {
    let res = await axios.get(url);
    // console.log(res);
    // console.log(res.data);
    //console.log(res.data.articles);

    res.data.articles.javascript.forEach(element => {
      //console.log(element);
      mainCards.appendChild(createCard(element));
    });
    res.data.articles.bootstrap.forEach(element => {
      //console.log(element);
      mainCards.appendChild(createCard(element));
    });
    res.data.articles.technology.forEach(element => {
      //console.log(element);
      mainCards.appendChild(createCard(element));
    });
    res.data.articles.jquery.forEach(element => {
      //console.log(element);
      mainCards.appendChild(createCard(element));
    });

    res.data.articles.node.forEach(element => {
      //console.log(element);
      mainCards.appendChild(createCard(element));
    });
    // let articleArray = Array.from(res.data.articles);
    //articleArray.push(res.data.articles);
    //console.log('=====');
    //console.log(articleArray);

    // articleArray.forEach(element);

    // res.data.articles.forEach(element => {
    //   element.forEach(card => {
    //     mainCards.appendChild(createCard(card));
    //   });
    //});
    return res;
  } catch (err) {
    console.log(err);
  }
};

let mainCards = document.querySelector('.cards-container');
makeAllCards('https://lambda-times-backend.herokuapp.com/articles');
