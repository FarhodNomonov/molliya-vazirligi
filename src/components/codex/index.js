import React from "react";
import { Time } from "../../assets/icons";
import Modal from "../../ui/modal";
import Timer from "../../ui/realTime";
import "./codex.css";

function Codex({ questions }) {
  const [timeEnd, setTimeEnd] = React.useState(false);
  const DataText = [
    {
      id: 0,
      number: 1,
      title: questions.question1,
    },
    {
      id: 1,
      number: 2,
      title: questions.question2,
    },
    {
      id: 2,
      number: 3,
      title: questions.question3,
    },
    {
      id: 3,
      number: 4,
      title: questions.question4,
    },
    {
      id: 4,
      number: 5,
      title: questions.question5,
    },
  ];

  const ShuffleQuestions = (array = []) => {
    for (var i = array.length; i > 0; --i)
      array.push(array.splice((Math.random() * i) | 0, 1)[0]);
    return array;
  };

  const RandomArray = ShuffleQuestions([0, 1, 2, 3, 4]);

  
  return timeEnd ? (
    <Modal text={"time end"} />
  ) : (
    <div className="codex">
      <div className="codex_time">
        <div className="codex_in">
          <div className="codex_in_svg">
            <Time />
          </div>
          <p>
            <Timer delayResend={questions?.time * 60} setTimeEnd={setTimeEnd} />
          </p>
        </div>
      </div>
      <div className="codex_title">
        <h1>{questions?.title}</h1>
      </div>
      <div className="codex_content">
        {RandomArray.map((item, i) => {
          return (
            <p key={item}>
              <span>{i + 1}. </span>
              {DataText[item].title}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Codex;
