const dialogElem = document.getElementById("dialog");
const showBtn = document.querySelector(".show");
const closeBtn = document.querySelector(".close");
const addBtn = document.querySelector(".add");
const bookTable = document.querySelector(".book--table");
const deleteDialogElem = document.querySelector("#delete--book");
const books = document.querySelectorAll(".book", "row");

showBtn.addEventListener("click", () => {
  dialogElem.showModal();
});

closeBtn.addEventListener("click", () => {
  dialogElem.close();
});

function addHoverListenerToBooks() {
  const books = document.querySelectorAll(".book"); // Re-select all books after adding a new one
  books.forEach((book) => {
    book.addEventListener("mouseenter", () => {
      deleteDialogElem.showModal();
      console.log("hover success");
    });
  });
}

function addBook() {
  console.log("do do");

  const newBook = document.createElement("div");
  newBook.classList.add("row", "book");

  const newBookName = document.createElement("div");
  newBookName.textContent = document.querySelector("#book__name").value;
  newBook.appendChild(newBookName);

  const newBookAuthor = document.createElement("div");
  newBookAuthor.textContent = document.querySelector("#book__author").value;
  newBook.appendChild(newBookAuthor);

  const newBookPage = document.createElement("div");
  newBookPage.textContent = document.querySelector("#page__count").value;
  newBook.appendChild(newBookPage);

  const newBookStatus = document.createElement("input");
  newBookStatus.type = "checkbox";
  newBookStatus.checked = document.querySelector("#read__status")?.checked;
  newBook.appendChild(newBookStatus);

  bookTable.appendChild(newBook);
  dialogElem.close();
  addHoverListenerToBooks();
}
