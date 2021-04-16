import React from 'react';
import Table from './table/Table';


const Answers = (props: any) => {
    return (
        <div>
            <Table
                markedAnswer = {props.markedAnswer}
                checkAnswer = {props.checkAnswer}
                answers = {props.currentAnswers}
            />
        </div>
    );
}

export default Answers;
