import React from 'react';
import BookItem from './BookItem';


const BookList = ({books,deleteData,editData}) => {
  return (
    <ul className="list">
    {books.map(book=>{
      return <BookItem key={book.book_id} book={book} DeleteData={deleteData} editData={editData} />;
    })}      
    </ul>
  )
}
export default BookList;