//If the import is coming from the node module than we don't need to use the path
//we can just use the dependency name
import React from "react";
import ReactDom from "react-dom";

//But if the import is not coming from the node module than we would need to use the
//correct path otherwise it won't load
//CSS
import "./index.css";
//set up

//If it is a named export like this case we are exporting books from books.js that has
//an array named 'books'. so we would need to use import with the same name

//If we are importing the js file than we don't need the extention like '.js' in the end
import { books } from "./books";

//If we use export default than you can name the file whatever you want so you don't need to
// use curly braces
import SpecificBook from "./Book";

import { greeting } from "./testing/testing";

// const names = ["sagar", "simmu", "parmar"];
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });

function BookList() {
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book) => {
        {
          /* const { author, title, img } = book; */
        }
        //here we are passing book object as a props and than from there we can destructure the book
        //object and than print the value
        {
          /* return <Book key={book.id} book={book} />; */
        }
        return <SpecificBook key={book.id} {...book} />;
      })}

      {/* Example of children props */}
      {/* <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      > */}
      {/* Whatever we would put in here would be stored in props and in the 'children' attribute */}
      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        quasi minima quisquam, rerum at voluptates eum fuga officiis quod
        maiores? */}
      {/* </Book> */}

      {/* <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      /> */}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
