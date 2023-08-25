const card = document.querySelector('[data-js="question-card"]');
const bookmarkIcon = document.querySelector('[data-js="question-card__icon"]');
const showAnswerButton = document.querySelector(
  '[data-js="question-card__button"]'
);

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

function toggleAnswer() {
  if (
    showAnswerButton.style.display === "none" ||
    showAnswerButton.innerHTML === "show answer"
  ) {
    showAnswerButton.innerHTML = "Hide answer";
  } else {
    showAnswerButton.innerHTML = "show answer";
  }
}

bookmarkIcon.addEventListener("click", (event) => {
  toggleFirstBookmark();
  console.log("bookmarkIcon ", bookmarkIcon);
});

showAnswerButton.addEventListener("click", () => {
  console.log("showAnswerButton clicked");
  toggleAnswer();
});
