CREATE DATABASE kitaplar;

CREATE TABLE books(
    book_id integer primary key,
    book_name varchar(50) not null,
    book_writer varchar(50) not null
);