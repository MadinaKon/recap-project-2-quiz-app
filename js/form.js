import { toggleButtons } from "./toggleButtons.js";

const card = document.querySelector('[data-js="question-card"]');
const cardContainer = document.querySelector('[data-js="card-container"]');

const addNewForm = document.querySelector('[data-js="add-new-form-card"]');
const questionTextarea = document.querySelector('[data-js="form-question"]');
const answerTextarea = document.querySelector('[data-js="form-answer"]');

const questionTextareaMaxLength = questionTextarea.getAttribute("maxlength");
const answerTextareaMaxLength = answerTextarea.getAttribute("maxlength");

const amountLeft = document.querySelector('[data-js="amountLeft"]');
const bookmarkIcon = document.querySelector('[data-js="question-card__icon"]');

const questionCardAnswer = document.querySelector(
  '[data-js="question-card__answer"]'
);

let bookmarkClicked = false;
let showAnswerClicked = true;

addNewForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const dataForm = Object.fromEntries(formData);

  const newCard = document.createElement("section");
  newCard.classList.add("question-card");
  newCard.setAttribute("data-js", "question-card");

  const bookmarkIcon = document.createElement("img");
  bookmarkIcon.classList.add("question-card__icon");
  bookmarkIcon.setAttribute("data-js", "question-card__icon");
  bookmarkIcon.setAttribute("src", "./assets/bookmark.png");
  bookmarkIcon.setAttribute("alt", "bookmark");

  const questionCard = document.createElement("h2");
  questionCard.classList.add("question-card__title");

  questionCard.textContent = dataForm["form-question"];

  const questionCardAnswer = document.createElement("p");
  questionCardAnswer.classList.add("question-card__answer");
  questionCardAnswer.setAttribute("data-js", "question-card__answer");
  questionCardAnswer.setAttribute("hidden", "");
  questionCardAnswer.textContent = dataForm["form-answer"];

  bookmarkIcon.setAttribute("data-js", "question-card__icon");

  const tagsCard = document.createElement("div");
  tagsCard.classList.add("question-card__tags");
  const tagCard = document.createElement("div");
  tagCard.classList.add("question-card__tag");
  tagCard.textContent = dataForm["tag"];
  tagsCard.append(tagCard);

  const showAnswerButton = document.createElement("button");
  showAnswerButton.classList.add("question-card__button");
  showAnswerButton.setAttribute("data-js", "question-card__button");
  showAnswerButton.textContent = "show answer";

  newCard.append(questionCard);
  newCard.append(questionCardAnswer);
  newCard.append(tagCard);
  newCard.append(bookmarkIcon);
  newCard.append(showAnswerButton);

  cardContainer.append(newCard);

  addNewForm.reset();

  showAnswerButton.addEventListener("click", () => {
    questionCardAnswer.toggleAttribute("hidden");
    toggleButtons(showAnswerClicked, showAnswerButton);
  });

  bookmarkIcon.addEventListener("click", () => {
    toggleFirstBookmark();
  });

  function toggleFirstBookmark() {
    let bookmarkImage = "./assets/bookmark.png";
    let bookmarkImageFilled = "./assets/bookmark_filled.png";

    if (bookmarkClicked) {
      bookmarkIcon.setAttribute("src", bookmarkImage);
      bookmarkClicked = false;
    } else {
      bookmarkIcon?.setAttribute("src", bookmarkImageFilled);
      bookmarkClicked = true;
    }
  }
});

const updateAmountLeft = (value) => {
  amountLeft.innerText = value;
};

questionTextarea.addEventListener("input", (e) => {
  updateAmountLeft(questionTextareaMaxLength - e.target.value.length);
});

answerTextarea.addEventListener("input", (e) => {
  updateAmountLeft(answerTextareaMaxLength - e.target.value.length);
});
