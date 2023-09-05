import { toggleButtons, toggleFirstBookmark } from "./toggleButtons.js";

const bookmarkIcon = document.querySelector('[data-js="question-card__icon"]');

console.log("bookmarkIcon", bookmarkIcon);
const showAnswerButton = document.querySelector(
  '[data-js="question-card__button"]'
);

const questionCardAnswer = document.querySelector(
  '[data-js="question-card__answer"]'
);

// let bookmarkClicked = false;
let showAnswerClicked = true;

bookmarkIcon.addEventListener("click", (event) => {
  event.preventDefault();
  let bookmarkImage = event.target.attributes.src.value;

  if (bookmarkImage === "./assets/bookmark.png") {
    return bookmarkIcon.setAttribute("src", "./assets/bookmark_filled.png");
  }
  return bookmarkIcon.setAttribute("src", "./assets/bookmark.png");
});

if (showAnswerButton) {
  showAnswerButton.addEventListener("click", () => {
    questionCardAnswer.toggleAttribute("hidden");
    toggleButtons(showAnswerClicked, showAnswerButton);
  });
}
