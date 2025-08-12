import React from 'react';
import './Hangman.css'
import FaceAnimation from './FaceAnimation';

interface GameDisplayProps {
    wrongLetters: string[];
  }

const Hangman: React.FC <GameDisplayProps>= ({wrongLetters}) => {
  return (
    <div className='hangman'>
        <FaceAnimation wrongLetters={wrongLetters}></FaceAnimation>
        <div className={(wrongLetters.length>=7)?'left-arm':''}> </div>
        <div className={(wrongLetters.length>=8)?'right-arm':''}> </div>
        <div className={(wrongLetters.length>=9)?'left-leg':''}> </div>
        <div className={(wrongLetters.length>=10)?'right-leg':''}> </div>
        <div className={(wrongLetters.length>=6)?'body':''}> </div>
        <div className={(wrongLetters.length>=4)?'rope':''}> </div>
        <div className={(wrongLetters.length>=2)?'bar':''}> </div>
        <div className={(wrongLetters.length>=3)?'top':''}> </div>
        <div className={(wrongLetters.length>=1)?'bottom':''}> </div>
    </div>
  );
};

export default Hangman;
