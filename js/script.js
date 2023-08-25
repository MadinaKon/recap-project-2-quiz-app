const card = document.querySelector('[data-js="question-card"]');
const bookmarkIcon = document.querySelector('[data-js="question-card__icon"]');

let bookmarkClicked = false;

card.addEventListener("click", () => {
  console.log("card is clicked");
});

function toggleFirstBookmark() {
  let bookmarkImage = "./assets/bookmark.png";
  let bookmarkImageFilled = "./assets/bookmark_filled.png";

  if (bookmarkClicked) {
    bookmarkIcon.setAttribute("src", bookmarkImage);
    bookmarkClicked = false;
  } else {
    bookmarkIcon.setAttribute("src", bookmarkImageFilled);
    bookmarkClicked = true;
  }
}

bookmarkIcon.addEventListener("click", (event) => {
  toggleFirstBookmark();
  console.log("bookmarkIcon ", bookmarkIcon);
});
