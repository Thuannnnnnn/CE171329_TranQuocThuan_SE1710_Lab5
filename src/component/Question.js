import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const Question = ({ data, handleAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null)

  const onAnswerClick = option => {
    setSelectedOption(option)
    handleAnswer(option)
  }

  return (
    <div>
      <h2 className='mt-3'>{data.question}</h2>
      <div className='answer-options m-3'>
        {data.options.map((option, index) => (
          <Button
            key={index}
            onClick={() => onAnswerClick(option)}
            variant={
              selectedOption === option ? 'primary' : 'outline-secondary'
            }
            style={{ margin: '20px' }} 
          >
            {option}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Question
