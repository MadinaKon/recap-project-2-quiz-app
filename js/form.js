import { toggleFirstBookmark, toggleButtons } from "./common.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const addNewForm = document.querySelector('[data-js="add-new-form-card"]');
const questionTextarea = document.querySelector('[data-js="form-question"]');
const answerTextarea = document.querySelector('[data-js="form-answer"]');

const questionTextareaMaxLength = questionTextarea.getAttribute("maxlength");
const answerTextareaMaxLength = answerTextarea.getAttribute("maxlength");

const amountLeft = document.querySelector('[data-js="amountLeft"]');

const bookmarkIcon = document.querySelector(".question-card__icon");

addNewForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const dataForm = Object.fromEntries(formData);
  console.log("dataForm: ", dataForm);

  const newCard = document.createElement("section");
  newCard.classList.add("question-card");
  newCard.setAttribute("data-js", "question-card");

  const bookmarkIconCard = document.createElement("img");
  bookmarkIconCard.classList.add("question-card__icon");
  bookmarkIconCard.setAttribute("data-js", "question-card__icon");
  // img src="./assets/bookmark_filled.png"
  bookmarkIconCard.setAttribute("src", "./assets/bookmark.png");
  bookmarkIconCard.setAttribute("alt", "bookmark");

  const questionCard = document.createElement("h2");
  questionCard.classList.add("question-card__title");

  questionCard.textContent = dataForm["form-question"];

  const answerCard = document.createElement("p");
  answerCard.classList.add("question-card__answer");
  // bookmarkIconCard.setAttribute("data-js", "question-card__answer");
  bookmarkIconCard.setAttribute("data-js", "question-card__icon");

  // bookmarkIconCard.setAttribute("hidden", "");

  answerCard.textContent = dataForm["form-answer"];

  const tagsCard = document.createElement("div");
  tagsCard.classList.add("question-card__tags");
  const tagCard = document.createElement("div");
  tagCard.classList.add("question-card__tag");
  tagCard.textContent = dataForm["tag"];
  tagsCard.append(tagCard);

  const buttonCard = document.createElement("button");
  buttonCard.classList.add("question-card__button");
  buttonCard.setAttribute("data-js", "question-card__button");
  buttonCard.textContent = "show answer";

  newCard.append(questionCard);
  newCard.append(answerCard);
  newCard.append(tagCard);
  newCard.append(bookmarkIconCard);
  newCard.append(buttonCard);

  cardContainer.append(newCard);

  addNewForm.reset();

  // dataForm["form-question"].focus();
});

toggleButtons();

if (bookmarkIcon) {
  toggleFirstBookmark();
}
const updateAmountLeft = (value) => {
  amountLeft.innerText = value;
};

questionTextarea.addEventListener("input", (e) => {
  updateAmountLeft(questionTextareaMaxLength - e.target.value.length);
});

answerTextarea.addEventListener("input", (e) => {
  updateAmountLeft(answerTextareaMaxLength - e.target.value.length);
});
