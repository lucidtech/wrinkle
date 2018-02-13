import React, {Component} from 'react'
import Score from './score'
import {askAQuestion, isItCorrect} from './questions'

export default class Quiz extends Component {
    constructor(props) {
        super(props)
        this.question = askAQuestion()
        this.state = {
            val : false
        }
        this.checkAnswer = this.checkAnswer.bind(this)
    }

    checkAnswer(e,o) {
        e.preventDefault()
        const correct = isItCorrect(e.target.dataset.index)
        this.setState({val : correct})
    }

    render() {
        return (
            <div>
                <Score/>
                <p>{this.question.question}</p>
                {
                    this.question.answers.map((answer, index) => {
                        return(
                            <p key={index} data-index={index} onClick={this.checkAnswer}>{answer.text}</p>
                        )
                    })
                }
                <p>{this.state.val.toString()}</p>
            </div>
        )
    }
}