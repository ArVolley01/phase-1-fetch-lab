function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  const fetched = fetch('https://anapioficeandfire.com/api/books')

  console.log(fetched.then((res) => res.json()).then((json) => renderBooks(json)))

  return fetched;
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
