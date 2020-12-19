import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UL320_.jpg"
      alt=""
    />
  );
};

const Title = () => {
  return <h1>The Subtle Art of Not Giving a F*ck</h1>;
};

const Author = () => {
  return (
    <h4 style={{ color: "#617d98", fontSize: "1rem", marginTop: "0.25rem" }}>
      {" "}
      Mark Manson
    </h4>
  );
};
ReactDom.render(<BookList />, document.getElementById("root"));
