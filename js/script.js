const card = document.querySelector('[data-js="question-card"]');
const bookmarkIcon = document.querySelector('[data-js="question-card__icon"]');
const showAnswerButton = document.querySelector(
  '[data-js="question-card__button"]'
);
const questionCardAnswer = document.querySelector(
  '[data-js="question-card__answer"]'
);

let bookmarkClicked = false;
let showAnswerClicked = true;

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

function toggleButtons() {
  if (showAnswerClicked) {
    showAnswerButton.innerHTML = "hide answer";
    showAnswerClicked = false;
  } else {
    showAnswerButton.innerHTML = "show answer";
    showAnswerClicked = true;
  }
}


bookmarkIcon.addEventListener("click", () => {
  toggleFirstBookmark();
  console.log("bookmarkIcon ", bookmarkIcon);
});

showAnswerButton.addEventListener("click", () => {
  console.log("showAnswerButton clicked");
  //   toggleButtons();
  questionCardAnswer.toggleAttribute("hidden");
  toggleButtons();
});
