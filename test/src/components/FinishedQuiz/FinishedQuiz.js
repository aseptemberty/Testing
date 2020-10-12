import React from "react";
import classes from './FinishedQuiz.module.css'
import Button from "../UI/Button/Button";
import {Link} from "react-router-dom";

const FinishedQuiz = props =>{
    const successCount = Object.keys(props.results).reduce((total,key)=>{
        if (props.results[key]==="success"){total++}
        return total
    },0)
    return (
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem,index)=>{
                    const res =[
                        props.results[quizItem.id] === 'success'? 'Верно' :'Неверно',
                    ]
                    const cls =[
                        classes[props.results[quizItem.id]]
                    ]
console.log(props.results)
                    return(
                        <li
                        key={index}>
                            <strong>{index+1}</strong>.&nbsp;
                            {quizItem.question}&nbsp;
                            <span>
                                <strong className={cls.join(' ')}>
                                    {res.join(' ')}
                                </strong>
                            </span>

                        </li>
                    )
                })}
            </ul>
            <p>
                Правильно {successCount} из {props.quiz.length}
            </p>
            <div>
                <Button
                    onClick={props.onRetry}
                    type = 'primary'
                >
                    Заново
                </Button>

                <Link to="/">
                    <Button
                        type = 'success'
                    >
                        Перейти к тестам
                    </Button>
                </Link>

            </div>
        </div>
    )
}
export default FinishedQuiz