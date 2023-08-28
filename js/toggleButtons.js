export function toggleButtons(showAnswerClicked, showAnswerButton) {
  if (showAnswerClicked) {
    showAnswerButton.innerHTML = "hide answer";
    showAnswerClicked = false;
  } else {
    showAnswerButton.innerHTML = "show answer";
    showAnswerClicked = true;
  }
}
