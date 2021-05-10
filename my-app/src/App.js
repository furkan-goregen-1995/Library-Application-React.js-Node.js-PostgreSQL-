import './App.css';
import Welcome from './components/Welcome';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import { useState, useEffect } from 'react';
import React from 'react';
import uuid from 'uuid/dist/v4';
import axios from 'axios';
import randomInteger from 'random-int';

function App() {
     
  const bookss = [
  {id: uuid(),name:"seçme hikayeler",writer:"ömer seyfettin"},
  {id: uuid(),name:"seçme hikayeler",writer:"ömer seyfettin"},
  {id: uuid(),name:"seçme hikayeler",writer:"ömer seyfettin"}, 
];

const datas = [];


const [data,setData] = useState([]);
const [books,setBooks] = useState(bookss);
const [name,setName] = useState('');
const [writer,setWriter] = useState('');
const [edit,setEdit] = useState(false);
const [id,setId] = useState(0);

/*
useEffect(()=>{
 fetch("http://localhost:5000/books").then(response => response.json()).then(response => setData(response.data));
})
*/


useEffect(() => {
  axios .get('http://localhost:5000/books')
        .then(response => setData(response.data.rows)  );
})


console.log(data);


const handleName = (e) => {
  setName(e.target.value);
}

const handleWriter = (e) => {
  setWriter(e.target.value);
}

const DeleteAllData = () => {
  axios.post('http://localhost:5000/books/delete');
}

const DeleteData = id => {
  axios.delete(`http://localhost:5000/books/${id}`)  
      .then(res => {  
        console.log(res);  
        console.log(res.data);  
    
        let selectDeleteData = books.filter(book=>book.id!==id);  
        setBooks(selectDeleteData);  
      })  
  
  
}

const editData = id => {
  let selectEditData = data.find(book=>book.book_id===id);
  let {book_name,book_writer} = selectEditData;
  setName(book_name);
  setWriter(book_writer);
  setEdit(true);
  setId(id);
}

const handleSubmit = (e) =>{
  e.preventDefault();
  if(name!=="" && writer!==""){
    if(edit){
    axios({
      method: 'put',
      url: `http://localhost:5000/books/${id}`,
      data: {
        book_name: name,
        book_writer: writer
      }
    });
	
	}
      
 /*     let selectEditedData = books.map(book=>{
        return book.id===id?{...book,name,writer}:book;
      })
      setBooks(selectEditedData);
  */
    
    else{
      const simpleBook = {book_name: name,book_writer: writer};
      
      axios({
        method: 'post',
        url: 'http://localhost:5000/books',
        data: {
          book_id: randomInteger(1, 32000),
          book_name: name,
          book_writer: writer
        }
      });
      setBooks([...books,simpleBook]);
}
setName("");
      setWriter("");
      setEdit(false);
  }
  
  
}
  return (
    <>
    <div className="App">
      
      <Welcome/>
      <BookList books={data} deleteData={DeleteData} editData={editData}/>
      <BookForm name={name} writer={writer} handleWriter={handleWriter} handleName={handleName} handleSubmit={handleSubmit} setEdit={edit}/>
      <button type="button" className="btn" onClick={DeleteAllData}>Delete All Data</button>
      </div>
   

      </>
  );

}

export default App;


/*<h1>{data.map(newdata =>{
  return(
    <div>{newdata.book_name}</div>
  )
})}</h1>;
 */