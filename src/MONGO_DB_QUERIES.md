**I) Create Operation:**

1) QUESTION:    \- Create a new database named "library" and switch to it.

QUERY: test\> use library  
OUTPUT:  
switched to db library

---

2) QUESTION :Create a collection named "books" with fields: title, author, and published\_year.

   Insert a document into the "books" collection with the details of your favorite book.

QUERY: library\> db.books.insertOne({title:"You Can",author:"George Matthew Adams",published\_year:2020})

OUTPUT:  
{  
  acknowledged: true,  
  insertedId: ObjectId('67f10a0d8f714e2922b71236')  
}

---

**II) 2\. \*Read Operation:\***  
QUESTION:  
   \- Retrieve all documents from the "books" collection.  
QUERY:  
library\> db.books.find()  
OUTPUT:  
\[  
  {  
    \_id: ObjectId('67f10a0d8f714e2922b71236'),  
    title: 'You Can',  
    author: 'George Matthew Adams',  
    published\_year: 2020  
  },  
  {  
    \_id: ObjectId('67f10e868f714e2922b71237'),  
    title: 'Eloquent JavaScript',  
    author: 'Marjin',  
    published\_year: 2022  
  },  
  {  
    \_id: ObjectId('67f10e868f714e2922b71238'),  
    title: 'The Road To React',  
    author: 'Robin Wieruch',  
    published\_year: 2023  
  },  
  {  
    \_id: ObjectId('67f10e868f714e2922b71239'),  
    title: 'Mongo DB Applied Patterns',  
    author: 'Rick Copeland',  
    published\_year: 2024  
  },  
  {  
    \_id: ObjectId('67f110288f714e2922b7123a'),  
    title: "Harry Potter and the Philosopher's Stone",  
    author: 'J.K.Rowling',  
    published\_year: 1997  
  },  
  {  
    \_id: ObjectId('67f11e348f714e2922b7123b'),  
    title: 'The Catcher in the Rye',  
    author: 'Holden Caulfield',  
    published\_year: 1950  
  },  
  {  
    \_id: ObjectId('67f11f1a8f714e2922b7123c'),  
    title: 'Wings of fire',  
    author: 'Abdul Kalam',  
    published\_year: 2005  
  },  
  {  
    \_id: ObjectId('67f11f5d8f714e2922b7123d'),  
    title: '1984',  
    author: 'George Orwell',  
    published\_year: 2014  
  }  
\]

---

QUESTION: Find and display only the documents where the author is "J.K. Rowling".

QUERY: library\> db.books.find({author:"J.K.Rowling"})  
OUTPUT:  
\[  
  {  
    \_id: ObjectId('67f110288f714e2922b7123a'),  
    title: "Harry Potter and the Philosopher's Stone",  
    author: 'J.K.Rowling',  
    published\_year: 1997  
  }  
\]

---

  QUESTION: \- Fetch and display the document with the earliest published year.  
QUERY:library\> db.books.find().sort({ published\_year: 1 }).limit(1)  
OUTPUT:  
\[  
  {  
    \_id: ObjectId('67f11e348f714e2922b7123b'),  
    title: 'The Catcher in the Rye',  
    author: 'Holden Caulfield',  
    published\_year: 1950  
  }  
\]

---

**III) 3\. \*Update Operation:\***  
 QUESTION: \- Update the published year of the book with the title "The Catcher in the Rye" to the current year.  
QUERY:library\>  db.books.updateOne({ title: "The Catcher in the Rye" }, { $set: { published\_year: 2025 } })  
OUTPUT:   
{  
  acknowledged: true,  
  insertedId: null,  
  matchedCount: 1,  
  modifiedCount: 1,  
  upsertedCount: 0  
}

---

 QUESTION  \- Add a new field "genre" with the value "Mystery" to all documents in the "books" collection.  
QUERY:library\> db.books.updateMany({}, { $set: { genre: "Mystery" } }, { multi: true })  
OUTPUT:  
{  
  acknowledged: true,  
  insertedId: null,  
  matchedCount: 8,  
  modifiedCount: 8,  
  upsertedCount: 0  
}

---

**IV) 4\. \*Delete Operation:\***  
 QUESTION  \- Remove the document with the title "1984" from the "books" collection.  
QUERY: library\> db.books.deleteOne({ title: "1984" })  
OUTPUT: { acknowledged: true, deletedCount: 0 }

---

QUESTION:Delete all documents where the published year is before 2000

QUERY:library\> db.books.deleteMany({ published\_year: { $lt: 2000 } })  
OUTPUT:{ acknowledged: true, deletedCount: 1 }

---
ADVANCED QUERY:

QUESTION:Find and display the top 3 recently published books from the "books" collection.

QUERY:library> db.books.find().sort({ published_year: -1 }).limit(3)

OUTPUT:
[
  {
    _id: ObjectId('67f11e348f714e2922b7123b'),
    title: 'The Catcher in the Rye',
    author: 'Holden Caulfield',
    published_year: 2025,
    genre: 'Mystery'
  },
  {
    _id: ObjectId('67f10e868f714e2922b71239'),
    title: 'Mongo DB Applied Patterns',
    author: 'Rick Copeland',
    published_year: 2024,
    genre: 'Mystery'
  },
  {
    _id: ObjectId('67f10e868f714e2922b71238'),
    title: 'The Road To React',
    author: 'Robin Wieruch',
    published_year: 2023,
    genre: 'Mystery'
  }
]

QUESTION:  Retrieve documents from the "books" collection where the title contains the word "MongoDB" or "NoSQL".

QUERY: db.books.find({ title: /MongoDB|NoSQL/i })
OUTPUT:
[
  {
    _id: ObjectId('67f10e868f714e2922b71239'),
    title: 'Mongo DB Applied Patterns',
    author: 'Rick Copeland',
    published_year: 2024,
    genre: 'Mystery'
  }
]

