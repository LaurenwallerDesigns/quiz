import React from 'react'




const Results = (props) => {
    let header;
    if(props.score >= 15) {
        header = 'You know dogs! You got a 100%!'
    }else if(props.score <= 14 && props.score >= 12){
        header = `You did great! scored a ${props.score} out of 15`;
    }else if(props.score <= 11 && props.score >= 8){
        header = `You did pretty good. Try again and see if you can get 100%. Final score ${props.score} out of 15`
    }else {
        header = `Final score ${props.score} out of 15`;
    }
    return (
        <div>
        <h2> Results page</h2>
        <p>{header}</p>
        </div>
    )
}


export default Results;