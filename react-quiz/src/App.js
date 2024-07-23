// import DateCounter from "./DateCounter";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import { useEffect, useReducer } from "react";
import StartScreen from "./StartScreen";
import Question from "./Question";

const initialState = {
  questions: [],

  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
  index: 0,
};

function reducer(state, action) {
  switch(action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };

    case 'dataFailed':
      return {
        ...state,
        status: "error",
      };

    case 'start':
      return {
        ...state, 
        status: "active",
      }

    default:
      throw new Error("Action unknown");
  }
}

//useReducer to store that data in state
export default function App() {
  const [{questions, status}, dispatch] = useReducer(reducer, 
    initialState);

  const numQuestions = questions.length;

  //Used useEffect to fetch data on an initial render
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({type: 'dataReceived', payload: data }))
      .catch((err) => dispatch({type: 'dataFailed'}));
  }, []);

  return ( 
    <div className="app">
      {/* <DateCounter /> */}
      <Header />

      <Main >
        {status === "loading" && 
        <Loader />}

        {status === "error" &&
        <Error />}

        {status === "ready" &&
        <StartScreen numQuestions = 
          {numQuestions} dispatch={dispatch} />}
        {status === "active" && <Question />}
      </Main>

    </div>
  );
}