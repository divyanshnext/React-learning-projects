const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

/*
function getBooks() {
  return data;
}
// console.log(getBooks());

function getBook(id) {
  return data.find((d) => d.id === id);
}

const book = getBook(3);

// to destrutture the properties of the first book in the data array
const {title,author,pages,genres} = data[0];

console.log(title,author,pages,genres);
// genres is an array, so we can destructure it using square brackets
const [primarygenres, secondarygenres, , ...otherGenres] = genres
console.log(primarygenres, secondarygenres);

const newGenres = [...genres];
console.log(newGenres);

const updatedBook = {
  ...book,
  //adding a new property
  moviePublicationDate: "2001-12-19",
  // updating an existing property
  pages: 700,
};
console.log(updatedBook);

const summary = `${title} is a book by ${author} with ${pages} pages and published in ${data[0].publicationDate.split("-")[0]}. `;
console.log(summary);

// ternary operator 
const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000"
console.log(`the book has ${pagesRange} pages`)

// arrow funtions

//Optional chaining 
// get total review count of book1

function getTotalReviewCount(book){
  const goodReads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;

  return goodReads + librarything;

}

console.log(getTotalReviewCount(book))
*/

// Map filter and reduce
function getBooks(){
  return data
}
function getBook(id){
  return data.find((d) => d.id === id);
}


const books = getBooks()
console.log(books)

const x = [1,2,3,4,5].map((ele)=>ele*2);
// map method creates a new array based on the orgial array with some operations applied to each element of the original array

const title = books.map((books) => books.title)
console.log(title)

const essentialData = books.map((book) => ({
    title: book.title,
    author: book.author
}));
console.log(essentialData)

// filter method
// to filter something from an array based on some condition ( it also creates a new array)

const longBooks = books
      .filter((book) => book.pages < 500)
      .filter((book) => book.hasMovieAdaptation)
longBooks

// lets filter out only adventorous book
const adBook = books.filter((book)=>book.genres.includes("adventure")).map((book)=>book.title)
// kyuki array ke upar map toh lga hi skte ho
adBook

// reduce method 
// it is most versatile and most used among all array method in js
// abhi padhna baaki hai

// sort method

// working with immutable array

