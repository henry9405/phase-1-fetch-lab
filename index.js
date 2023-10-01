function fetchBooks() {
  // Make a fetch request to the Game of Thrones API
  const apiUrl = 'https://anapioficeandfire.com/api/books';

  // Return the fetch promise so that it can be accessed by tests
  return fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      // Call the renderBooks function with the JSON data
      renderBooks(data);
    })
    .catch((error) => {
      console.error('Error fetching books:', error);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach((book) => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});

