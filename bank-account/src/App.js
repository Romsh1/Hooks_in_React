import { useReducer } from "react";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'openAccount':
      return {
        ...state,
        balance: 500,
        isActive: true
      };

    case 'deposit': 
      return '';
    case 'withdraw': 
      return '';
    case 'requestLoan': 
      return '';
    case 'payLoan': 
      return '';
    default:
      throw new Error("Unknown");
  }
};

export default function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <h1>useReducer Bank Account</h1>
        <p>Balance: {balance} </p>
        <p>Loan: {loan} </p>
      </div> 

      <p>
        <button onClick={() => {}} disabled={isActive}>
          Open Account
        </button>
      </p>

      <p>
        <button onClick={() => {}} disabled={isActive}>
            Deposit:
        </button>
      </p>

      <p>
        <button onClick={() => {}} disabled={isActive}>
          Withdraw:
        </button>
      </p>

      <p>
        <button onClick={() => {}} disabled={isActive}>
          Request a loan of 
        </button>
      </p>

      <p> 
        <button onClick={() => {}} disabled={isActive}>
          Pay Loan
        </button>
      </p>

      <p>
        <button onClick={() => {}} disabled={isActive}>
          Close account
        </button>
      </p>
    </>
  );
};