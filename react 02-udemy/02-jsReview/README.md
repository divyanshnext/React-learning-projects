# JavaScript Array Methods & Object Manipulation — Beginner Notes

---

## 1. Data Structure Example
We start with an array of book objects. Each book has properties like `id`, `title`, `author`, `genres`, `pages`, `translations`, and `reviews`.

```js
const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: ["fantasy", "high-fantasy", ...],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: { ... },
    reviews: { ... },
  },
  // ...more books
];
```

---

## 2. Functions to Access Data
- `getBooks()` returns the whole array.
- `getBook(id)` returns a single book by its `id`.

```js
function getBooks() {
  return data;
}
function getBook(id) {
  return data.find((d) => d.id === id);
}

console.log(getBooks()); // Output: [Array of all book objects]
console.log(getBook(3)); // Output: Book object with id 3
```

---

## 3. Destructuring
Destructuring lets you extract values from objects or arrays easily.

```js
const { title, author, pages, genres } = data[0];
console.log(title, author, pages, genres); // Output: The Lord of the Rings J. R. R. Tolkien 1216 [ 'fantasy', ... ]

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre); // Output: fantasy high-fantasy
```

---

## 4. Spread Operator
- Copy arrays or objects, or add new properties.
```js
const newGenres = [...genres];
console.log(newGenres); // Output: [ 'fantasy', 'high-fantasy', ... ]

const updatedBook = {
  ...book,
  moviePublicationDate: "2001-12-19",
  pages: 700, // updates pages
};
console.log(updatedBook); // Output: Book object with updated pages and new property
```

---

## 5. String Interpolation
- Use backticks and `${}` to insert variables into strings.
```js
const summary = `${title} is a book by ${author} with ${pages} pages and published in ${data[0].publicationDate.split("-")[0]}.`;
console.log(summary); // Output: The Lord of the Rings is a book by J. R. R. Tolkien with 1216 pages and published in 1954.
```

---

## 6. Ternary Operator
- Shorthand for `if-else`.
```js
const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
console.log(`the book has ${pagesRange} pages`); // Output: the book has over a thousand pages
```

---

## 7. Arrow Functions
- Shorter way to write functions.
```js
const x = [1,2,3,4,5].map((ele) => ele * 2);
console.log(x); // Output: [2, 4, 6, 8, 10]
```

---

## 8. Optional Chaining & Nullish Coalescing
- Safely access nested properties.
```js
function getTotalReviewCount(book) {
  const goodReads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodReads + librarything;
}
console.log(getTotalReviewCount(book)); // Output: (sum of reviewsCount for book)
```

---

## 9. Array Methods

### a. map
- Creates a new array by applying a function to each element.
```js
const titles = books.map((book) => book.title);
console.log(titles); // Output: [ 'The Lord of the Rings', 'The Cyberiad', ... ]
```

### b. filter
- Creates a new array with elements that pass a test.
```js
const longBooks = books.filter((book) => book.pages < 500);
console.log(longBooks); // Output: Array of books with less than 500 pages

const adaptedBooks = books.filter((book) => book.hasMovieAdaptation);
console.log(adaptedBooks); // Output: Array of books with movie adaptations

const adventureBooks = books.filter((book) => book.genres.includes("adventure")).map((book) => book.title);
console.log(adventureBooks); // Output: [ 'The Lord of the Rings', 'Dune', 'Harry Potter and the Philosopher's Stone' ]
```

### c. reduce
- Combines all elements into a single value (e.g., sum, average).
```js
const totalPages = books.reduce((acc, book) => acc + book.pages, 0);
console.log(totalPages); // Output: (sum of all book pages)
```

### d. sort
- Sorts the elements of an array.
```js
const sortedByPages = [...books].sort((a, b) => a.pages - b.pages);
console.log(sortedByPages); // Output: Array of books sorted by page count
```

---

## 10. Immutability
- Always create new arrays/objects instead of changing the originals.
- Use spread operator or array methods that return new arrays.

---

## 11. Practice & Experiment
- Read the comments in `script copy.js` for more explanations.
- Try changing the code and running it again to see what happens.
- Use these examples as a reference for your own projects.

---

**Tip:**
To run the code, open a terminal in this folder and type:
```powershell
node "script copy.js"
```

**Happy Learning!**
