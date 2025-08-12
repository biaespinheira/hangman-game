import React from 'react';
import './WordDisplay.css'

interface WordDisplayProps {
  palavra: string;
  correctLetters: string[];
}

const WordDisplay: React.FC<WordDisplayProps> = ({ palavra, correctLetters }) => {
  const letras = palavra.split('');
  return (
    <div className='word-display'>
      {letras.map((letra, index) => (
        <div className='letter' key={index} >
          {correctLetters.includes(letra) ? letra : ''}
        </div>
      ))}
    </div>
  );
};

export default WordDisplay;
