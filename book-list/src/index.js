import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";
//set up

const firstBook = {
  author: "Mark Manson",
  title: "The Subtle Art of Not Giving a F*ck",
  img: "https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UL320_.jpg",
};

const secondBook = {
  author: "Amelia Hepworth and Tim Warnes",
  title: "I Love You to the Moon and Back",
  img: "https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UL320_.jpg",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
}

const Book = (props) => {
  // console.log(props);

  //destructuring of the props object and than extracting the properties img, title, author
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author} </h4>

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
