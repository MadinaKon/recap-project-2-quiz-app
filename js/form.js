const cardContainer = document.querySelector('[data-js="card-container"]');
const addNewForm = document.querySelector('[data-js="add-new-form-card"]');
const questionTextarea = document.querySelector('[data-js="form-question"]');
const answerTextarea = document.querySelector('[data-js="form-answer"]');

const questionTextareaMaxLength = questionTextarea.getAttribute("maxlength");
const answerTextareaMaxLength = answerTextarea.getAttribute("maxlength");

const amountLeft = document.querySelector('[data-js="amountLeft"]');

addNewForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const dataForm = Object.fromEntries(formData);
  console.log("dataForm: ", dataForm);

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

  newCard.append(questionCard);
  newCard.append(answerCard);
  newCard.append(tagCard);

  cardContainer.append(newCard);

  addNewForm.reset();

  dataForm["form-question"].focus();
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
