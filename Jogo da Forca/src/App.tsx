import React, { useState, useEffect } from 'react';
import WordForm from './components/addWord/WordForm.tsx';
import GameDisplay from './components/game/GameDisplay.tsx';
import InitialMenu from './components/menus/InitialMenu.tsx';

const App: React.FC = () => {
  const [lista, setLista] = useState<string[]>(["ABACATE", "CASA", "BANANA", "CARRO", "DADO", "ELEFANTE", "FADA", "GATO",  "IGLU", "JANELA", "KIWI", "LAGARTO", "MACACO", "NAVIO", "OLHO", "PATO", "QUEIJO", "RATO", "SAPO", "TATU", "URSO", "VELA", "XADREZ", "ZEBRA"]);

  const [isMenuActive, setIsMenuActive] = useState<boolean>(true);
  const [isAddWordActive, setIsAddWordActive] = useState<boolean>(false);
  const [isGameActive, setIsGameActive] = useState<boolean>(false);

  const [randomWord, setRandomWord] = useState<string>('');
  const [correctLetters, setCorrectLetters] = useState<string[]>([]);
  const [wrongLetters, setWrongLetters] = useState<string[]>([]);

  const [gameWins, setGameWins] = useState<number>(0);
  const [gameLosses, setGameLosses] =useState<number>(0);

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * lista.length);
    return lista[randomIndex];
  };

  const startNewGame = () => {
    setRandomWord(getRandomWord());
    setCorrectLetters([]);
    setWrongLetters([]);
  };

  useEffect(() => {
    startNewGame();
  }, [lista]);


  return (
    <div>
      <InitialMenu 
      isMenuActive={isMenuActive} 
      setIsMenuActive={setIsMenuActive}
      setIsAddWordActive={setIsAddWordActive}
      setIsGameActive={setIsGameActive}
      startNewGame={startNewGame}

      ></InitialMenu>

      <WordForm 
      lista={lista} 
      setLista={setLista} 
      isAddWordActive={isAddWordActive} 
      setIsAddWordActive={setIsAddWordActive}
      setIsGameActive={setIsGameActive}
      startNewGame={startNewGame}
      ></WordForm>

      <GameDisplay 
      lista={lista}
      isGameActive={isGameActive}
      setIsGameActive={setIsGameActive}
      setIsMenuActive={setIsMenuActive}

      randomWord={randomWord}
      correctLetters={correctLetters}
      setCorrectLetters={setCorrectLetters}
      wrongLetters={wrongLetters}
      setWrongLetters={setWrongLetters}
      startNewGame={startNewGame}

      setGameWins={setGameWins}
      gameWins={gameWins}
      setGameLosses={setGameLosses}
      gameLosses={gameLosses}
      ></GameDisplay>
    </div>
  );
};

export default App;
