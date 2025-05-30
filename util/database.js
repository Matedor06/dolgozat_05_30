import Database from "better-sqlite3";

const db = new Database("./database/database.sqlite")

db.prepare("CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY AUTOINCREMENT, title STRING, author STRING)").run();

export const getBooks = () => db.prepare("SELECT * FROM books").all();
export const getBook = (id) => db.prepare("SELECT * FROM books WHERE id = ?").get(id);
export const saveBook = (title, author) => db.prepare("INSERT INTO books (title, author) VALUES (?, ?)").run(title, author);
export const deleteBook = (id) => db.prepare("DELETE FROM books WHERE id = ?").run(id);

const books = [
    {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald" },
    {"title": "To Kill a Mockingbird", "author": "Harper Lee" },
    {"title": "1984", "author": "George Orwell" },
    {"title": "Pride and Prejudice", "author": "Jane Austen" },
    {"title": "The Catcher in the Rye", "author": "J.D. Salinger" }
]
/*
for (var book of books){
    saveBook(book.title, book.author);
}*/