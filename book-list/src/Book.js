import React from "react";

const Book = (props) => {
  // console.log(props);

  //destructuring of the props object and than extracting the properties img, title, author
  //the name of the "children props" must always be a "children"
  // const { img, title, author, children } = props.book;

  //if we use spread '...' operator before the object than we can just use simple props
  //destructuring

  //attribute, EventHandler
  //onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello world of events in React");
  };

  //whenever we have arguments inside the onClick's function,
  //it is necessary to define an arrow function like this '() => function() '
  //in order to run the function on the click only
  //if we don't use arrow function than it will run automatically
  //whenever you would render the page
  const moreComplexHandler = (author) => {
    console.log(author);
  };

  //implicit return: () => console.log('here')
  //explicit return: () => {console.log('here')}

  const { author, title, img } = props;
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 style={{ cursor: "pointer" }} onClick={() => alert(title)}>
        {title}
      </h1>
      <h4>{author} </h4>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
      <button type="button" onClick={() => moreComplexHandler(author)}>
        More Complex Example
      </button>
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

export default Book;
