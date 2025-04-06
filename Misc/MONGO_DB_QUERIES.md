
# 📚 MongoDB CRUD Operations

## I. Create Operation

**Create a new database named "library" and switch to it:**

```
use library
```

**Create a collection and insert a book:**

```
db.books.insertOne({title: "You Can", author: "George Matthew Adams", published_year: 2020})
```

## II. Read Operation

**Retrieve all documents:**

```
db.books.find()
```

**Find by author:**

```
db.books.find({author: "J.K.Rowling"})
```

**Find earliest published:**

```
db.books.find().sort({ published_year: 1 }).limit(1)
```

## III. Update Operation

**Update year:**

```
db.books.updateOne({ title: "The Catcher in the Rye" }, { $set: { published_year: 2025 } })
```

## IV. Delete Operation

**Delete by title:**

```
db.books.deleteOne({ title: "1984" })
```
