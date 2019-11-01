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

const cardContainer = document.querySelector(".cards-container");

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    console.log(response.data.articles);
    response.data.articles.bootstrap.forEach(i => {
      let newArticle = ArticleCard(i.authorName, i.authorPhoto, i.headline);
      cardContainer.appendChild(newArticle);
    });
    response.data.articles.javascript.forEach(i => {
      let newArticle = ArticleCard(i.authorName, i.authorPhoto, i.headline);
      cardContainer.appendChild(newArticle);
    });
    response.data.articles.tecnhology.forEach(i => {
      let newArticle = ArticleCard(i.authorName, i.authorPhoto, i.headline);
      cardContainer.appendChild(newArticle);
    });
    response.data.articles.jquery.forEach(i => {
      let newArticle = ArticleCard(i.authorName, i.authorPhoto, i.headline);
      cardContainer.appendChild(newArticle);
    });
    response.data.articles.node.forEach(i => {
      let newArticle = ArticleCard(i.authorName, i.authorPhoto, i.headline);
      cardContainer.appendChild(newArticle);
    });
  })
  .catch(error => {
    console.log(error);
  });

function ArticleCard(authorName, authorPhoto, headline) {
  //creating the elements
  const card = document.createElement("div");
  const headlineContent = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const imgSrc = document.createElement("img");
  const byAuthor = document.createElement("span");

  //assigning classes to the elements
  card.classList.add("card");
  headlineContent.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  //appending the elements
  card.appendChild(headlineContent);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(imgSrc);
  author.appendChild(byAuthor);

  //adding textContent
  headlineContent.textContent = headline;
  author.textContent = authorName;
  imgSrc.src = authorPhoto;
  byAuthor.textContent = `By: ${authorName}`;
}
