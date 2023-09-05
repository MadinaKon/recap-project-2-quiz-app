export function toggleButtons(showAnswerClicked, showAnswerButton) {
  if (showAnswerClicked) {
    showAnswerButton.innerHTML = "hide answer";
    showAnswerClicked = false;
  } else {
    showAnswerButton.innerHTML = "show answer";
    showAnswerClicked = true;
  }
}

export function toggleFirstBookmark(bookmarkClicked, bookmarkIcon) {
  let bookmarkImage = "./assets/bookmark.png";
  let bookmarkImageFilled = "./assets/bookmark_filled.png";

  if (bookmarkClicked) {
    return bookmarkIcon.setAttribute("src", `${bookmarkImage}`);
  } else {
    return bookmarkIcon.setAttribute("src", `${bookmarkImageFilled}`);
  }
}
