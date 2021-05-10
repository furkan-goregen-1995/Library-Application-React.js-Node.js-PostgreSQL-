import React from 'react';
import { MdDelete } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';


const BookItem = ({book,DeleteData,editData}) => {
  const {book_name,book_writer,book_id} = book; 
    return (
        <li>
        <div className="info">
        <span className="book">{book_name}: </span>
        <span className="book">{book_writer}</span>
        <MdDelete onClick={()=>DeleteData(book_id)}/>
        <BiEdit onClick={()=>editData(book_id)}/>
        </div>
        </li>
    )
};
export default BookItem;