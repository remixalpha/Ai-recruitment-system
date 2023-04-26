import React, { useReducer, useState } from "react";
import Axios from "axios";

const formReducer = (state, event) => {
    if (event.reset) {
        return {
            title: '',
            question: '',
            option_1: '',
            option_2: '',
            option_3: '',
            option_4: '',
            correct_answer: ''
        }
    }
    return {
        ...state,
        [event.name]: event.value
    }
}


function CreateQuestion() {
    const [formData, setFormData] = useReducer(formReducer, {
    });
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = event => {
        console.log(formData);
        event.preventDefault();
        setSubmitting(true);

        Axios.post('http://localhost:8080/insert', {
            title: formData.title,
            question: formData.question,
            option_1: formData.option_1,
            option_2: formData.option_2,
            option_3: formData.option_3,
            option_4: formData.option_4,
            answer: formData.correct_answer
        })
        setTimeout(() => {
            setSubmitting(false);
            setFormData({
                reset: true
            })
        }, 3000);
    }
    const handleChange = event => {
        const isCheckbox = event.target.type === 'checkbox';
        setFormData({
            name: event.target.name,
            value: isCheckbox ? event.target.checked : event.target.value,
        })
    }
    return (
        <div className="quiz-container">
            <form onSubmit={handleSubmit}>
                <fieldset disabled={submitting}>
                    <label>
                        <p>Title</p>
                        <select name="title" onChange={handleChange} value={formData.title || ''}>
                            <option value="">--Please choose an option--</option>
                            <option value="technical">Technical Questions</option>
                            <option value="nonTechnical">Non Technical Questions</option>
                        </select>
                    </label>
                </fieldset>
                <fieldset disabled={submitting}>
                    <label>
                        <p>Question</p>
                        <input type="text" name="question" onChange={handleChange} value={formData.question || ''} />
                    </label>
                </fieldset>
                <fieldset disabled={submitting}>
                    <label>
                        <p>Option 1</p>
                        <input type="text" name="option_1" onChange={handleChange} value={formData.option_1 || ''} />
                    </label>
                    <label>
                        <p>Option 2</p>
                        <input type="text" name="option_2" onChange={handleChange} value={formData.option_2 || ''} />
                    </label>
                </fieldset>
                <fieldset disabled={submitting}>
                    <label>
                        <p>Option 3</p>
                        <input type="text" name="option_3" onChange={handleChange} value={formData.option_3 || ''} />
                    </label>
                    <label>
                        <p>Option 4</p>
                        <input type="text" name="option_4" onChange={handleChange} value={formData.option_4 || ''} />
                    </label>
                </fieldset>
                <fieldset disabled={submitting}>
                    <label>
                        <p>Correct Answer</p>
                        <select name="correct_answer" onChange={handleChange} value={formData.correct_answer || ''}>
                            <option value="">--Please choose an option--</option>
                            <option value="option_1">Option 1</option>
                            <option value="option_2">Option 2</option>
                            <option value="option_3">Option 3</option>
                            <option value="option_4">Option 4</option>
                        </select>
                    </label>
                </fieldset>
                <button type="submit" onSubmit={() => this.handleSubmit(formData)} disabled={submitting}>Submit</button>
            </form>
        </div >
    )
}

export default CreateQuestion;