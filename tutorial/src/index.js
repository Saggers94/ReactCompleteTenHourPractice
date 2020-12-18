import React from "react";
import ReactDom from "react-dom";

//Always Remember React component should always return only one single root element

//when we use capital  name for the function then react would know that this function is special and it is
//related to component

//These Component are also called Stateless Component
//Always return JSX

function Greeting() {
  return (
    // <React.Fragment>
    //   <h1>Hello React World!</h1>
    // </React.Fragment>
    //Nested Component
    <div>
      <Person />
      <Message />
    </div>
  );
  // return <h4>This is sagar and this is my first component of this course.</h4>;
}

const Person = () => <h2>Sherlock Sagar</h2>;

const Message = () => {
  return <p>This is Sherlock Sagar Holmes!</p>;
};

// const Greeting = () => {
//so under the hood whenever we write JSX, there are functions that gets called
//like here
// return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hello React World!")
//   );
// };

//whenever we use render function of ReactDom we have to make sure that the function
//that represents the component must be capitalize
ReactDom.render(<Greeting />, document.getElementById("root"));

//Rules:
//return Single Element
//div, section, article or React.fragment(<> </>)
//Each HTML attribute would need Camelcase capitalization like "onClick"
