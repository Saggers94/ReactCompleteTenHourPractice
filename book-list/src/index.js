import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
//set up

const books = [
  {
    id: 1,
    author: "Mark Manson",
    title: "The Subtle Art of Not Giving a F*ck",
    img: "https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UL320_.jpg",
  },

  {
    id: 2,
    author: "Amelia Hepworth and Tim Warnes",
    title: "I Love You to the Moon and Back",
    img: "https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UL320_.jpg",
  },
  {
    id: 3,
    author: "Toni Morrison",
    title: "Beloved",
    img: "https://m.media-amazon.com/images/I/613vQdXPDwL._AC_UL320_.jpg",
  },
];

// const names = ["sagar", "simmu", "parmar"];
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });

function BookList() {
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
        return <Book key={book.id} {...book} />;
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

const Book = (props) => {
  // console.log(props);

  //destructuring of the props object and than extracting the properties img, title, author
  //the name of the "children props" must always be a "children"
  // const { img, title, author, children } = props.book;

  //if we use spread '...' operator before the object than we can just use simple props
  //destructuring

  const { author, title, img } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author} </h4>

      {/* Here we can access children from props that is in between the tags of the component  */}
      {/* <p>{children}</p> */}

      {/* {console.log(props)} */}
      {/* This won't work as whatever that is passed inside '{}' should return something. In this case
      we are assigning variable 'l' to 6, so it won't work as it is not returning anything */}
      {/* <p>{ let l = 6}</p> */}

      {/* This would work as 6+6 would return 12 */}
      {/* <p>{6 + 6}</p> */}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
