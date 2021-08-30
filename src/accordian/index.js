import React, { useState } from "react";
import { questions as data } from "../data";

// static files import
import close from "../assests/close.svg";
import open from "../assests/open.svg";

const Index = () => {
  const [questions] = useState(data);

  return (
    <main>
      <div className="project__heading">
        <h1>ACCORDION</h1>
      </div>
      <div className="title">
        <h2>Quesiton And Answers About Login.</h2>
      </div>

      <div className="questions">
        {questions.map((question) => {
          return <Question {...question} key={question.id} />;
        })}
      </div>
    </main>
  );
};

const Question = (props) => {
  const { title, info } = props;
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (e) => {
    setIsOpen(!isOpen);
  };
  return (
    <article>
      <header>
        <h3>{title}</h3>
        <button type="button" onClick={handleClick}>
          {!isOpen ? <img src={open} alt="" /> : <img src={close} alt="" />}
        </button>
      </header>
      {isOpen && <p>{info}</p>}
    </article>
  );
};

export default Index;
