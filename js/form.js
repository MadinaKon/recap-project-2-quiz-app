const cardContainer = document.querySelector('[data-js="card-container"]');
const addNewForm = document.querySelector('[data-js="add-new-form-card"]');

addNewForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const dataForm = Object.fromEntries(formData);
  console.log("dataForm: ", dataForm);

  const newCard = document.createElement("section");
  newCard.classList.add("card");

  const questionCard = document.createElement("p");
  console.log("qq ", dataForm["form-question"]);
  questionCard.textContent = dataForm["form-question"];

  newCard.append(questionCard);

  cardContainer.append(newCard);

  addNewForm.reset();
});
