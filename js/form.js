const addNewForm = document.querySelector('[data-js="add-new-form-card"]');

addNewForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const dataForm = Object.fromEntries(formData);
  console.log("dataForm: ", dataForm);

  // const newCard = document.createElement("section");
  // newCard.classList.add("card");

  // const imageCard = createImage();
  // const titleCard = createTitle(dataForm.inputText);
  // const pCard = createText(count);

  // newCard.append(imageCard);
  // newCard.append(titleCard);
  // newCard.append(pCard);
  // cardContainer.append(newCard);
});
