import React, { useContext } from 'react'
import { AuthenticationContext } from '../../../services/authentication/authentication.context'
import { JournalQuestion } from '../../../components/journal-question.component'

export const OutcomeMultipleChoice = ({ step }) => {
    const { outcomeData, changeOutcomeEntry } = useContext(AuthenticationContext)
    const questions = [
        "Over the last 2 weeks, how often have you been bothered by the following problem: feeling nervous, anxious or on edge?",
        "Over the last 2 weeks, how often have you been bothered by the following problem: not being able to stop or control worrying?",
        "Over the last 2 weeks, how often have you been bothered by the following problem: little interest or pleasure in doing things?",
        "Over the last 2 weeks, how often have you been bothered by the following problem: feeling down, depressed, or hopeless?"
    ]

    return (
        <JournalQuestion question={questions[step - 3]} helpText={"Choose one"} />
    )
    
}