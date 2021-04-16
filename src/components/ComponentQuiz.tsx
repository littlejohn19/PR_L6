import React from 'react';
import questions from '../questions.json'
import {useState} from 'react'
import Questions from './Questions';
import Answers from './Answers';
import Results from './Results';
import Actions from './Actions';

const styles = {
    display: 'flex',
    justifyContent: 'center'
}

const ComponentQuiz = (props: any) => {

    const [currentIndex, setIndex] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(questions[currentIndex])
    const [currentPoints, setPoints] = useState(0)
    const [allowToChoose, setAllowToChoose] = useState(true)
    const [markedAnswer, setMarkedAnswer] = useState(
        {
            key: -1,
            variant:''
        }
    )

    const handleNextQuestion = () => {
        const next = currentIndex+1
        if (next > questions.length - 1){
            setIndex(questions.length - 1)
            return
            }
        setIndex(next);
        setCurrentQuestion(questions[next]);
        setAllowToChoose(true)
        setMarkedAnswer({
            key: -1,
            variant:''
        })
    }

    const handlePrevQuestion = () => {
        const prev = currentIndex-1
        if (prev <= 0){
            setIndex(0)
            return
            }
        setIndex(prev);
        setCurrentQuestion(questions[prev]);
        setAllowToChoose(true)
        setMarkedAnswer({
            key: -1,
            variant:''
        })
    }

    const handleChecked = (chosen : string, key: number)=>{
        if(!allowToChoose){
            return
        }
        if(currentQuestion.correct_answer === chosen){
            const points = currentPoints + 1;
            setPoints(points);
            setAllowToChoose(false);
            setMarkedAnswer({key, variant: 'bg-success'})
            
        }else{
            setAllowToChoose(false)
            setMarkedAnswer({key, variant: 'bg-danger'})
        }
    }


    return (
        <div style= {styles}>
        <div className = "container">
            <Questions className = "col-12"
            currentQuestion = {currentQuestion.question}
            currentIndex = {currentIndex+1}
            allQuestions = {questions.length}
            />
            <Answers className = "col-12"
            checkAnswer = {handleChecked}
            currentAnswers = {currentQuestion.answers}
            markedAnswer = {markedAnswer}
            />
            <Results points = {currentPoints}/>
            <Actions
            disablePrev = {currentIndex > 0}
            disableNext = {currentIndex !== questions.length - 1}
            prev = {handlePrevQuestion}
            next = {handleNextQuestion}
            />
        </div>
        </div>
    );
}

export default ComponentQuiz;
