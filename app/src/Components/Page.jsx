import  { useState } from 'react';
import './Page.css';

const Page = () => {
  const [showAudioOptions, setShowAudioOptions] = useState(false);
  const [showTextBox, setShowTextBox] = useState(false);
  const [prediction, setPrediction] = useState('');

  const handleAudioClick = () => {
    setShowAudioOptions(!showAudioOptions);
    setShowTextBox(false);
  };

  const handleTextClick = () => {
    setShowTextBox(!showTextBox);
    setShowAudioOptions(false);
  };

  const handlePredictClick = () => {
    setPrediction("The predicted disease is ...");
  };

  return (
    <div className="app">
      <h1>Symptom Checker</h1>
      <p>Enter your symptoms and health concerns through text or voice.<br />
         Our system will analyze your input to predict a possible diagnosis based on your description.</p>

      <div className="button-container">
        <button className="button" onClick={handleAudioClick}>
          <span role="img" aria-label="mic" className="mic-icon">🎙️</span> Audio
        </button>
        <button className="button" onClick={handleTextClick}>Enter Text</button>
      </div>

      {showAudioOptions && (
        <div className="audio-options">
          <button className="audio-button">Start Recording</button>
          <button className="audio-button">Upload Audio</button>
        </div>
      )}

      {showTextBox && (
        <div className="text-box-container">
          <input type="text" placeholder="Enter text here" className="text-input" />
        </div>
      )}

      <button className="predict-button" onClick={handlePredictClick}>Predict</button>

      {prediction && <p className="prediction-output">{prediction}</p>}
    </div>
  );
};

export default Page;
