import React from 'react';
import './menu.css';

interface InitialMenuProps {
  isMenuActive: boolean;
  setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
  setIsAddWordActive: React.Dispatch<React.SetStateAction<boolean>>;
  setIsGameActive: React.Dispatch<React.SetStateAction<boolean>>;
  startNewGame: () => void;
}

const InitialMenu: React.FC<InitialMenuProps> = ({ isMenuActive, setIsMenuActive, setIsAddWordActive, setIsGameActive, startNewGame }) => {

  const handleAddWordActive = () => {
    setIsMenuActive(false);
    setIsAddWordActive(true);
  };

  const handleGameActive = () =>{
    startNewGame();
    setIsMenuActive(false);
    setIsGameActive(true);
  }

  return (
    <div className={isMenuActive ? "menu" : "hidden"}>
      <div className="title">
        <h1>Hangman Game</h1>
      </div>

      <div className={isMenuActive ? "buttons" : "hidden"}>
        <button className="add-word-btn" onClick={handleAddWordActive}> Adicionar Palavra </button>
        <button className="game-btn" onClick={handleGameActive}> Jogar </button>
      </div>  
    </div>
  );
};

export default InitialMenu;
