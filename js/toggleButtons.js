export function toggleButtons(showAnswerClicked, showAnswerButton) {
  if (showAnswerClicked) {
    showAnswerButton.innerHTML = "hide answer";
    showAnswerClicked = false;
  } else {
    showAnswerButton.innerHTML = "show answer";
    showAnswerClicked = true;
  }
}

// export function toggleFirstBookmark(bookmarkClicked, bookmarkIcon) {
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

export function toggleFirstBookmark(bookmarkClicked, bookmarkIcon) {
  let bookmarkImage = "./assets/bookmark.png";
  let bookmarkImageFilled = "./assets/bookmark_filled.png";

  if (bookmarkClicked) {
    bookmarkIcon.setAttribute("src", bookmarkImage);
    bookmarkClicked = false;
  }

  bookmarkIcon?.setAttribute("src", bookmarkImageFilled);
  bookmarkClicked = true;
}
