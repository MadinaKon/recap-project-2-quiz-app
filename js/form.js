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


  
    // <section class="question-card" data-js="question-card">
  //       <img class="question-card__icon" data-js="question-card__icon" src="./assets/bookmark_filled.png" alt="bookmark">
  //       <h2 class="question-card__title">
  //         What property flips the axes of flexbox
  //       </h2>
  //       <button class="question-card__button" data-js="question-card__button">hide answer</button>
  //       <p class="question-card__answer" data-js="question-card__answer" hidden="">
  //         I am an answer
  //       </p>
  //       <div class="question-card__tags">
  //         <div class="question-card__tag">#html</div>
  //         <div class="question-card__tag">#css</div>
  //         <div class="question-card__tag">#flexbox</div>
  //       </div>
  //     </section>



  const newCard = document.createElement("div");
  newCard.classList.add("form-card");

  const questionCard = document.createElement("h2");
  questionCard.classList.add("form-card__title");

  questionCard.textContent = dataForm["form-question"];

  const answerCard = document.createElement("p");
  answerCard.classList.add("form-card__answer");

  answerCard.textContent = dataForm["form-answer"];

  const tagCard = document.createElement("div");
  tagCard.classList.add("form-card__tags");
  tagCard.textContent = dataForm["tag"];

  const bookmarkIconCard = document.createElement("img");
  bookmarkIconCard.classList.add("question-card__icon");
  bookmarkIconCard.setAttribute("src", "./assets/bookmark.png");
  bookmarkIconCard.setAttribute("alt", "bookmark icon");

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
