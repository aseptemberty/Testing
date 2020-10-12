import React from "react";
import classes from './ActiveQuiz.module.css'
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong> {props.question}</strong>
            </span>
            <small> {props.answerNumber} из {props.quizLenght} </small>
        </p>
        <AnswersList
        answers ={props.answers}
        onAnswerClick={props.onAnswerClick}
        state={props.answerState}/>
    </div>
)

export default ActiveQuiz