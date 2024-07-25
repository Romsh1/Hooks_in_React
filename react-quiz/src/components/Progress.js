function Progress( { index, numQuestion, points } ) {
    return (
        <header className="progress">
            <p>Question <strong>{index + 1}</strong> / 
                {numQuestion}
            </p>

            <p><strong>{points}</strong> / X</p>
        </header>
    )
}

export default Progress;