// import DateCounter from "./DateCounter";

import Header from "./Header";
import Main from "./Main";
import { useEffect, useReducer } from "react";

const initialState = {
  questions: [],

  // 'loading', 'error', 'ready', 'active', 'finished'
  status: "loading",
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
        state: "error",
      };

    default:
      throw new Error("Action unknown");
  }
}

//useReducer to store that data in state
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

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
        <p>1/15</p>
        <p>Question?</p>
      </Main>

    </div>
  );
}