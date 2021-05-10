import React from 'react';

const BookForm = ({name, writer, handleWriter,handleName, handleSubmit,setEdit}) => {
    console.log(setEdit);
    return (
        <div className="form-center">
            <form className="book-form" onSubmit={handleSubmit}>
            <div className="form-group">
            <label className="label-name">Name:</label>
            <input name="name" id="name" type="text" value={name} onChange={handleName}  placeholder="enter name..."/>
            </div>
            <div className="form-group">
            <label className="label-name">Writer:</label>
            <input name="writer" id="writer" type="text" value={writer} onChange={handleWriter}  placeholder="enter writer..."/>
            </div>
            <button className="btn" type="submit"> {setEdit?"Edit":"Submit"} </button>
            </form>
            
        </div>
    )
}
export default BookForm;