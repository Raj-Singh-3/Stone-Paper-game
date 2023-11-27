import React, { useState } from 'react';

const Game1 = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const choices = ['rock', 'paper', 'scissors'];

  const handleUserChoice = (choice) => {
    setUserChoice(choice);
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    setComputerChoice(computerChoice);
    determineResult(choice, computerChoice);
  };

  const determineResult = (user, computer) => {
    if (user === computer) {
      setResult('It\'s a tie!');
    } else if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'paper' && computer === 'rock') ||
      (user === 'scissors' && computer === 'paper')
    ) {
      setResult('You win!');
    } else {
      setResult('You lose!');
    }
  };

  const styles = {
    container: {
      textAlign: 'center',
      marginTop: '50px',
    },
    choicesContainer: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '20px',
    },
    choiceButton: {
      margin: '0 10px',
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
    },
    result: {
      color:'blue',
      fontSize: '20px',
      fontWeight: 'bold',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <h1>Rock Paper Scissors</h1>
      <div style={styles.choicesContainer}>
        {choices.map((choice) => (
          <button
            key={choice}
            style={styles.choiceButton}
            onClick={() => handleUserChoice(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
      {userChoice && computerChoice && (
        <div>
          <p>Your Choice: {userChoice}</p>
          <p>Computer's Choice: {computerChoice}</p>
          <div style={styles.result}>{result}</div>
        </div>
      )}
    </div>
  );
};

export default Game1;
