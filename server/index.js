const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//Middleware
app.use(cors());
app.use(express.json());

//ROUTES

//create a book

app.post("/books", async (req,res)=>{

    try {
        const {book_id,book_name,book_writer} = req.body;
        const newbook = await pool.query("INSERT INTO book.books(book_id,book_name,book_writer) VALUES ('"+[book_id]+"','"+[book_name]+"','"+[book_writer]+"')");
        res.json(newbook);
        console.log([book_name]+[book_writer]+[book_id]);
    } catch (err) {
        console.error(err.message);
    }

});



//get all book

app.get("/books", async(req,res)=>{
    try {
        const getbooks = await pool.query("SELECT * FROM book.books");
        res.json(getbooks);
    } catch (err) {
        console.error(err.message);
    }
})

//update a book

app.put("/books/:id", async(req,res)=>{
    try {
        const {book_name,book_writer} = req.body;
        const {id} = req.params;
        const updatebook = await pool.query("UPDATE book.books SET book_name ='"+[book_name]+"',book_writer='"+[book_writer]+"' WHERE book_id="+[id]+"");
        res.json(updatebook); 
    } catch (err) {
        console.error(err.message);
    }
})

// delete a book

app.delete("/books/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const deletebook = await pool.query("DELETE FROM book.books WHERE book_id="+[id]+"");
        res.json(deletebook);
    } catch (err) {
        console.error(err.message);
    }
});

app.post("/books/delete", async (req,res)=>{

    try {
        const deletes = await pool.query("DELETE FROM book.books;");
        res.json(deletes);
    } catch (err) {
        console.error(err.message);
    }

});


app.listen(5000, ()=>{
    console.log("server has started on port 5000");
});
