import "./app.css";
import { useEffect, useMemo, useState } from "react";

import Start from "./components/Start";
import Timer from "./components/Timer";
import Quiz from "./components/Quiz";
import start from "./components/Start";
function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("₹ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Where was the BRICS summit held in 2014?",
      answers: [
        {
          text: "Brazil",
          correct: true,
        },
        {
          text: "India",
          correct: false,
        },
        {
          text: "Russia",
          correct: false,
        },
        {
          text: "China",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which of these spices is the smallest in size?",
      answers: [
        {
          text: "Ajwain",
          correct: true,
        },
        {
          text: "Jeera",
          correct: false,
        },
        {
          text: "Saunf",
          correct: false,
        },
        {
          text: "Methi Seeds",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question:
        "Which battle in 1757 marked the beginning of British occupation in India?",
      answers: [
        {
          text: "Plassey",
          correct: true,
        },
        {
          text: "Assaye",
          correct: false,
        },
        {
          text: "Buxar",
          correct: false,
        },
        {
          text: "Cuddalore",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which is the second most spoken language of Nepal?",
      answers: [
        {
          text: "Bajjika",
          correct: false,
        },
        {
          text: "Nepali",
          correct: false,
        },
        {
          text: "Maithili",
          correct: true,
        },
        {
          text: "Bhojpuri",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "In which of these two sports is the term ‘free hit’ used?",
      answers: [
        {
          text: "Football, Squash",
          correct: false,
        },
        {
          text: "Badminton, Tennis",
          correct: false,
        },
        {
          text: "Badminton, Cricket",
          correct: true,
        },
        {
          text: "Hockey, Cricket",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₹ 1000" },
        { id: 2, amount: "₹ 2000" },
        { id: 3, amount: "₹ 3000" },
        { id: 4, amount: "₹ 5000" },
        { id: 5, amount: "₹ 10,000" },
        { id: 6, amount: "₹ 20,000" },
        { id: 7, amount: "₹ 40,000" },
        { id: 8, amount: "₹ 80,000" },
        { id: 9, amount: "₹ 1,60,000" },
        { id: 10, amount: "₹ 3,20,000" },
        { id: 11, amount: "₹ 6,40,000" },
        { id: 12, amount: "₹ 12,50,000" },
        { id: 13, amount: "₹ 25,00,000" },
        { id: 14, amount: "₹ 50,00,000" },
        { id: 15, amount: "₹ 75,00,000" },
        { id: 16, amount: "₹ 1,00,00,000" },
        
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber} />
                    
                  </div>
                </div>
                <div className="bottom">
                  <Quiz
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut} />
                  
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">

              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;