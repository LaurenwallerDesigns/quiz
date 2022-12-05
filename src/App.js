import './App.css';
import React, { useState } from 'react';
import Header from './components/header';
import Quiz from './components/question';
import Results from './components/results';

const questions = [
  'How many teeth does an adult dog have?', 
  'Where do dogs sweat from?', 
  'What was the most popular dog name in 2020?', 
  'What is a group of puppies called?', 
  'Which sense do dogs use most?', 
  'What does AKC stand for?', 
  'How many eyelids does a dog have?', 
  'What percentage of all dogs actually sleep in their owners’ bed?', 
  'What is the smallest breed of dog?',
  'What is the fastest breed of dog?',
  'What breed of dog has a black or a blue tongue?',
  'Which breed of dog is the most popular in the USA?',
  'Which US president is one of the only US presidents to not have a dog?',
  'Which breed of dog was originally bred to hunt wolves?',
  'Where do Great Danes come from originally?',
  'Which breed of dog is a particular favorite of the Queen of England?'  
]

const answers = [
  42, 
  'Their paw pads', 
  'Bella', 
  'Litter', 
  'Sense of smell', 
  'American Kennel Club', 
  3, 
  '45%', 
  'Chihuahua',
  'Greyhound',
  'A Chow-Chow',
  'Labrador retriever',
  'Donald Trump',
  'The Irish wolfhound',
  'Germany',
  'Corgi'
]

const tricks = {
  0: [39, 41, 45],
  1: ['nose','skin', 'mouth' ],
  2: ['Rocky', 'Coco', 'Tilly'],
  3: ['squad', 'flock', 'siblings'],
  4: ['eyesight', 'hearing', 'taste'],
  5: ['Australian Kid Club', 'American Kid Club', 'Australian Kennel Club'],
  6: [2, 4, 0],
  7: ['100%', '80%', '10%'],
  8: ['Toy Poodle', 'Maltese', 'Italian Greyhound'],
  9: ['German Shepherd', 'Whippet', 'Great Dane'],
  10: ['German Shepherd', 'Greyhound', 'Saint Bernard'],
  11: ['Golden Retriever', 'Jack Russell Terrier', 'Border Collie'],
  12: ['George Washington', 'Barack Obama', 'George W. Bush'],
  13: ['Husky', 'Bassett Hound', 'Great Dane'],
  14: ['France', 'Asia', 'England'],
  15: ['King Charles Cavalier', 'Border Collie', 'Whippet']
}

const App = () => {
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);
  let data = [];
  const quizData = (questions, answers, tricks) => {
    questions.map((q, i) => {
      data.push({
        question: q,
        answer: answers[i],
        tricks: tricks[i]
      });
    })
    console.log(data);
  }

  quizData(questions, answers, tricks);

  function correct(className, e) {
    if(className === 'answer') {
      setScore(score + 1);
      console.log('got it')
    }
    const node = e.target.parentNode.childNodes
    node.forEach((n) => {
      if(n.id === 'answer'){
        n.style.color = 'green';
      }else if(n.id === 'trick') {
        n.style.color = 'red';
      }
    })
    if(e.target.id >= data.length - 1){
      console.log('in over if')
      setResult(true);
    }
  }
  return (
    <div className="App">
      <Header
        scor={score} />
        {result ? <Results score={score} /> : <Quiz
          data={data}
          correct={correct}
          /> }
    </div>
  );
}

export default App;
