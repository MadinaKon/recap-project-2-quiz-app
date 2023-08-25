const card = document.querySelector('[data-js="question-card"]');
const bookmarkIcon = document.querySelector('[data-js="question-card__icon"]');

card.addEventListener("click", () => {
  console.log("card is clicked");
});

function toggleFirstBookmark() {
  let bookmarkImage = "./assets/bookmark_filled.png";
  //   bookmarkIcon.src = svgBookmark;
  bookmarkIcon.setAttribute("src", bookmarkImage);
}

bookmarkIcon.addEventListener("click", (event) => {
  toggleFirstBookmark();
  console.log("bookmarkIcon ", bookmarkIcon);
});
