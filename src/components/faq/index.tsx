import React, { useState } from "react";

import { IQuestionProps } from "./type";

const Component: React.FC<IQuestionProps> = ({ questions }) => {
    const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);
  
    const handleClick = (questionId: number) => {
      setSelectedQuestion(questionId === selectedQuestion ? null : questionId);
    };
    return (
        <div>
            {questions.map((question) => (
                <div key={question.id} onClick={() => handleClick(question.id)}>
                    <h3>{question.title}</h3>
                    {selectedQuestion === question.id && <p>{question.content}</p>}
                </div>
            ))}
        </div>
    )
}

Component.displayName = "FAQComponent"
export default Component;