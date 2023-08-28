import { toggleButtons, toggleFirstBookmark } from "./toggleButtons.js";

const bookmarkIcon = document.querySelector('[data-js="question-card__icon"]');
const showAnswerButton = document.querySelector(
  '[data-js="question-card__button"]'
);

const questionCardAnswer = document.querySelector(
  '[data-js="question-card__answer"]'
);

let bookmarkClicked = false;
let showAnswerClicked = true;

// export function toggleFirstBookmark() {
//   let bookmarkImage = "./assets/bookmark.png";
//   let bookmarkImageFilled = "./assets/bookmark_filled.png";

//   if (bookmarkClicked) {
//     bookmarkIcon.setAttribute("src", bookmarkImage);
//     bookmarkClicked = false;
//   } else {
//     bookmarkIcon?.setAttribute("src", bookmarkImageFilled);
//     bookmarkClicked = true;
//   }
// }

if (bookmarkIcon) {
  bookmarkIcon.addEventListener("click", () => {
    // toggleFirstBookmark();
    console.log("bookmarkIcon clicked");
    toggleFirstBookmark(bookmarkClicked, bookmarkIcon);
  });
}
if (showAnswerButton) {
  showAnswerButton.addEventListener("click", () => {
    questionCardAnswer.toggleAttribute("hidden");
    toggleButtons(showAnswerClicked, showAnswerButton);
  });
}
