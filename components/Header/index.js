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

function Header() {
  //creating my elements

  const headerDiv = document.createElement("div");
  const date = document.createElement("span");
  const headerH1 = document.createElement("h1");
  const temperature = document.createElement("span");

  //Adding classes
  headerDiv.classList.add("header");
  date.classList.add("date");
  temperature.classList.add("temp");

  //appending my elements

  headerDiv.appendChild(date);
  headerDiv.appendChild(headerH1);
  headerDiv.appendChild(temperature);

  return headerDiv;
}
const headerContainer = document.querySelector(".header-container");

headerContainer.appendChild(Header());
