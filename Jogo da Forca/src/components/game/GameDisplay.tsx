import React, { useEffect, useState } from 'react';
import WordDisplay from './wordDisplay/WordDisplay';
import Hangman from './hangmanDisplay/Hangman';
import './gameDisplay.css';

interface GameDisplayProps {
  lista: string[];
  isGameActive: boolean;
  setIsGameActive: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>;

  randomWord: string;

  correctLetters: string[];
  setCorrectLetters: React.Dispatch<React.SetStateAction<string[]>>;

  wrongLetters: string[];
  setWrongLetters: React.Dispatch<React.SetStateAction<string[]>>;

  startNewGame: () => void;

  gameWins: number;
  setGameWins: React.Dispatch<React.SetStateAction<number>>;

  gameLosses: number;
  setGameLosses: React.Dispatch<React.SetStateAction<number>>;
}

const GameDisplay: React.FC<GameDisplayProps> = ({
  isGameActive,
  setIsGameActive,
  setIsMenuActive,
  randomWord,
  correctLetters,
  setCorrectLetters,
  wrongLetters,
  setWrongLetters,
  startNewGame,
  gameWins,
  setGameWins,
  gameLosses,
  setGameLosses
}) => {
  const noRepetition = (str: string): number => {
    const uniqueChars = new Set(str);
    return uniqueChars.size;
  };

  const handleLetterClick = (letter: string) => {

    if (randomWord.includes(letter) && !correctLetters.includes(letter)) {
      setCorrectLetters([...correctLetters, letter]);
    } else if (!randomWord.includes(letter) && !wrongLetters.includes(letter)) {
      setWrongLetters([...wrongLetters, letter]);
    }
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    const letter = event.key.toUpperCase();
    if (/^[A-ZÇ]$/.test(letter)) {
      handleLetterClick(letter);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [correctLetters, wrongLetters, randomWord]);

  useEffect(() => {
    const totalLetters: number = noRepetition(randomWord);

    if ((correctLetters.length === totalLetters)&& correctLetters.length>0) {
      setGameWins(gameWins + 1);
      startNewGame();

    } else if (wrongLetters.length >= 10) {
      setGameLosses(gameLosses + 1);
      startNewGame();
    }
  }, [correctLetters, wrongLetters, randomWord, gameWins, gameLosses, startNewGame]);

  const handleMenuActive = () => {
    setIsGameActive(false);
    setIsMenuActive(true);
  };

  const [resultado, setResultado] = useState<string>('');

  const resetGame = () => {
    if (gameLosses>gameWins){
      setResultado('Derrota');
    } else if (gameWins>gameLosses){
      setResultado('Vitória');
    } else{
      setResultado('Empate');
    }

    const div = document.getElementById('resultado') as HTMLDivElement | null;

    if (div) {
      div.classList.add('visible');
      setTimeout(() => {
        div.classList.remove('visible');
      }, 5000);
    }

    startNewGame();
    setGameLosses(0);
    setGameWins(0);
  };

  const letters = 'ABCÇDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className={isGameActive ? 'game' : 'hidden'}>

      <div className='placar'>
          <h1>Placar</h1>
          <p> Vitórias  {gameWins} x {gameLosses}  Derrotas </p>
      </div>

      <Hangman wrongLetters={wrongLetters}></Hangman>

      <WordDisplay palavra={randomWord} correctLetters={correctLetters} />

      <div className='keyboard'>
        {letters.map((letter) => (
          <button className={wrongLetters.includes(letter)?"wrong-btn": "letter-btn"} key={letter} onClick={() => handleLetterClick(letter)}>
            {letter}
          </button>
        ))}
      </div>

      <div id='resultado'>
          <h1> {resultado} </h1>
      </div>

      <div className='game-buttons'>
        <button className="new-word-btn" onClick={startNewGame}>Nova palavra</button>
        <button className="back-menu-btn" onClick={handleMenuActive}>Voltar ao menu</button>
        <button className="finish-btn" onClick={resetGame}> Resultado Jogo </button>
      </div>
    </div>
  );
};

export default GameDisplay;

