import React from 'react';

const Questions = (props: any) => {
    return (
        <div>
            <p>Question:
                {props.currentIndex}/{props.allQuestions}
            </p>
            <p>{props.currentQuestion}</p>
        </div>
    );
}

export default Questions;
