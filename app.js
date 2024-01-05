// // lesson 2
// // const search = document.getElementById("search-books");
// // const bookList = document.getElementById("book-list");
// // console.log(search, bookList);

// // lesson 3
// const titles = document.getElementsByClassName("title");
// // for (i = 0; i < titles.length; i++) {
// //   console.log(titles[i]);
// // }
// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));
// Array.from(titles).forEach((item) => console.log(item));

// // lesson 4
// const wmf = document.querySelector("#book-list li:nth-child(2) .name");
// console.log(wmf);

// // Lesson 5
// const books = document.querySelectorAll("#book-list li .name");
// Array.from(books).forEach(function (book) {
//   book.textContent += " (Book title)";
// });
// const bookList = document.querySelector("#book-list");
// bookList.innerHTML = "<h2>Books and more books...</h2>";
// bookList.innerHTML += "<p>This is how you add HTML content</p>";

// // lesson 6
// const banner = document.querySelector("#page-banner");
// console.log("#page-banner node type is:", banner.nodeType);
// console.log("#page-banner node name is:", banner.nodeName);
// console.log("#page-banner has child nodes:", banner.hasChildNodes());
// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);

// // lesson 8
// const bookList = document.querySelector("#book-list");

// console.log("#book-list next sibling:", bookList.nextSibling);
// console.log("#book-list next element sibling:", bookList.nextElementSibling);
// console.log("#book-list previous sibling:", bookList.previousSibling);
// console.log("#book-list previous element sibling:", bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector("p").innerHTML += "<br />Too cool for everyone else!";

document.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelector("#book-list ul");
  const forms = document.forms;

  // delete books
  list.addEventListener("click", (e) => {
    if (e.target.className == "delete") {
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  });

  // add books
  const addForm = forms["add-book"];
  addForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // create elements
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement("li");
    const bookName = document.createElement("span");
    const deleteBtn = document.createElement("span");

    // add text content
    bookName.textContent = value;
    deleteBtn.textContent = "delete";

    // add classes
    bookName.classList.add("name");
    deleteBtn.classList.add("delete");

    // append to DOM
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });

  // hide books
  const hideBox = document.querySelector("#hide");
  hideBox.addEventListener("change", function (e) {
    if (hideBox.checked) {
      list.style.display = "none";
    } else {
      list.style.display = "initial";
    }
  });

  // filter books
  // const searchBar = forms["search-books"].querySelector("input");
  // searchBar.addEventListener("keyup", (e) => {
  //   const term = e.target.value.toLowerCase();
  //   const books = list.getElementsByTagName("li");
  //   Array.from(books).forEach((book) => {
  //     const title = book.querySelectorAll("span")[1].textContent; // Mengambil teks dari elemen 'span' kedua di dalam 'li'
  //     if (title.toLowerCase().indexOf(e.target.value) != -1) {
  //       book.style.display = "block";
  //     } else {
  //       book.style.display = "none";
  //     }
  //   });
  // });

  const searchBar = forms["search-books"].querySelector("input");
  searchBar.addEventListener("keyup", (e) => {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName("li");
    Array.from(books).forEach((book) => {
      const title = book.firstElementChild.textContent;
      if (title.toLowerCase().indexOf(e.target.value) != -1) {
        book.style.display = "block";
      } else {
        book.style.display = "none";
      }
    });
  });

  // tabbed content
  const tabs = document.querySelector(".tabs");
  const panels = document.querySelectorAll(".panel");
  tabs.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
      const targetPanel = document.querySelector(e.target.dataset.target);
      Array.from(panels).forEach((panel) => {
        if (panel == targetPanel) {
          panel.classList.add("active");
        } else {
          panel.classList.remove("active");
        }
      });
    }
  });
});
