import React, {useState} from 'react'



const Quiz = (props) => {
    let className;
    const showBtn = (but, id, e) => {
        const button = document.getElementById(but);
        button.style.display = 'inline-block';
        className = id;
        console.log(className);
        e.target.parentNode.childNodes.forEach((c, i) => {
            if(c.style.fontWeight === 'bold'){
                c.style.fontWeight = '400';
            }
            e.target.style.fontWeight = 'bold';
        })
        console.log(e);
    };
    const data = props.data.map((d, i) => {
        let answers = [];
        const question = d.question;
        const answer = d.answer;
        const tricks = d.tricks;
        answers.push(answer)
        tricks.forEach(t => {
            answers.push(t)
        });
        const btn = i;
        const display = {
            display: 'none'
        }
        return (
            <form key={i} className='form'>
                <h2>{question}</h2>
                {answers.map((a) => {
                    const id = a === d.answer ? 'answer' : 'trick';
                    return <li type="radio" key={a} id={a === d.answer ? 'answer' : 'trick'} onClick={(e) => showBtn(btn, id, e)}>{a}</li>
                })}
                <button type="button" id={btn} className="btn-question" onClick={(e) => props.correct(className, e)} style={display}>Submit</button>
            </form>
        )
    })

    return (
        <div className='question-container'>
            <h2></h2>
            <div className='answer-container'>
            {data}
            </div>
        </div>
    )
}

export default Quiz;