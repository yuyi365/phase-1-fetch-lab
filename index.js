const fetchBooks = () => {
  return fetch("https://anapioficeandfire.com/api/books")
  .then(response => {
    return response.json();
  })
  .then(booksJson => {
    return renderBooks(booksJson);
  });
}

//The first line of code fetches the requested data from the API. In the second line, we use the json() method of the Body mixin to render the API's response as plain old JavaScript object (POJO). Because we're using arrow syntax, the object is returned and passed to the next then(). Finally, in the second then(), the console.log() prints the JavaScript object to our console.

const renderBooks = (books) => {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

// const sumOfPages = (books) => {
//   for (const book of books) {
//     let sum = 0;
//     sum = sum + book.pages;
//   }
//   return sum;
// }

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
