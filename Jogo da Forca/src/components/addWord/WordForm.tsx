import React, { useState } from 'react';
import './WordForm.css'

interface WordFormProps {
  lista: string[];
  setLista: React.Dispatch<React.SetStateAction<string[]>>;

  isAddWordActive: boolean;
  setIsAddWordActive: React.Dispatch<React.SetStateAction<boolean>>;

  setIsGameActive: React.Dispatch<React.SetStateAction<boolean>>;

  startNewGame: () => void;
}

const WordForm: React.FC<WordFormProps> = ({ lista, setLista, isAddWordActive, setIsAddWordActive, setIsGameActive, startNewGame}) => {
  const [novoItem, setNovoItem] = useState<string>('');

  const adicionarItem = (evento: React.FormEvent) => {
    evento.preventDefault();
    if (novoItem.trim() !== '') {
      const item : string= novoItem.toUpperCase()
      setLista([...lista, item]);
      setNovoItem('');
    }
  };

  const handleGameActive = () => {
    startNewGame();
    setIsGameActive(true);
    setIsAddWordActive(false);
  }

  return (

    <div className={isAddWordActive? 'word-form' : 'hidden'}>
        <h1> Adicione uma palavra <br/>ao nosso banco de palavras! </h1>
        <form className={isAddWordActive? 'formulario' : 'hidden'} onSubmit={adicionarItem} >
            <input
              type="text"
              value={novoItem}
              onChange={(e) => setNovoItem(e.target.value)}
              placeholder="Digite uma nova palavra"
            />
            <button className="add-btn" type="submit">Adicionar</button>
        </form>

        <button className="start-game-btn" onClick={handleGameActive}> Jogar </button>
    </div>

  );
};

export default WordForm;
