function Options({ question, dispatch, answer }) {
    const hasAnswered = answer !== null;

    return (
        <div className="options">
            {question.options.map((option, index) => <button
                className={`btn btn-option ${index === answer ?
                    "answer" : "" } ${
                        hasAnswered 
                        ? index === question.correctOption 
                            ? "correct" 
                            : "wrong" 
                        : ""
                    } `}
                 key={option}
                 //Disable buttons if an answer has been selected
                 disabled={answer !== null} 
                    onClick={() => dispatch({type: 'newAnswer',
                        payload: index
                    })}
                >{option}
        </button>
        )}
    </div>
    );
}

export default Options