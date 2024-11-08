"use client";
import { useEffect, useState } from "react";
import { Mic, StopCircle, Upload } from "lucide-react";
import useSpeechToText from "react-hook-speech-to-text";

export default function Hero() {
  const [inputType, setInputType] = useState(null);
  const [file, setFile] = useState(null);
  const [convertedText, setConvertedText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    results?.map((result) =>
      setConvertedText((prevAns) => prevAns + result?.transcript)
    );
  }, [results]);

  const StartStopRecording = async () => {
    if (isRecording) {
      stopSpeechToText();
    } else {
      setResults([]);
      setConvertedText("");
      startSpeechToText();
    }
  };

  const printConvertedText = () => {
    console.log(convertedText);
  };

  const handleTextChange = (event) => {
    setDescriptionText(event.target.value);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      // Here you would typically upload the file and process it
      // For demonstration, we'll just set some placeholder text
      // setConvertedText(
      //   "This is where the converted text from your audio/video would appear..."
      // );
    }
  };

  const handleProcessAudio = () => {
    console.log("Converting Audio");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would typically send the data to your ML model
    alert(
      "Form submitted! In a real app, this would send the data to your ML model."
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <main className="container mx-auto px-6 py-12 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-6">
          AI-Powered Disease Detection
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
          Describe your symptoms through audio or text, and our advanced AI will
          help identify potential health issues.
        </p>
      </main>

      <div className="button-container">
        <button className="button" onClick={() => setInputType("audio")}>
          <span role="img" aria-label="mic" className="mic-icon">
            🎙️
          </span>{" "}
          Audio
        </button>
        <button className="button" onClick={() => setInputType("text")}>
          Enter Text
        </button>
      </div>

      <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Provide Your Symptom Data
            </h2>
            <form onSubmit={handleSubmit}>
              {inputType && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    {inputType === "audio"
                      ? "Upload Audio or Record"
                      : "Describe your experience"}
                  </label>

                  <div className="mt-2 flex items-center gap-4">
                    {inputType === "audio" && (
                      <>
                        <button
                          type="button"
                          onClick={StartStopRecording}
                          className={`flex items-center justify-center px-4 py-2 border rounded-md ${
                            isRecording
                              ? "bg-red-500 text-white"
                              : "bg-orange-400 text-white"
                          }`}
                        >
                          {isRecording ? (
                            <h2 className="animate-pulse flex gap-2 items-center">
                              <StopCircle />
                              Stop Recording
                            </h2>
                          ) : (
                            <h2 className="text-primary flex gap-2 items-center">
                              <Mic className="w-5 h-5 mr-2" />
                              Record Answer
                            </h2>
                          )}
                        </button>

                        <label className="flex items-center justify-center px-5 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-orange-400 hover:bg-orange-500">
                          <Upload className="w-6 h-6 mr-2" />
                          Upload {inputType === "audio" ? "Audio" : "Video"}
                          <input
                            type="file"
                            className="sr-only"
                            onChange={handleFileChange}
                            accept={
                              inputType === "audio" ? "audio/*" : "video/*"
                            }
                          />
                        </label>
                        {file && (
                          <button
                            type="button"
                            onClick={handleProcessAudio}
                            className={
                              "flex items-center justify-center px-4 py-2 border rounded-md bg-green-500 text-white"
                            }
                          >
                            Proceed
                          </button>
                        )}
                      </>
                    )}
                    {inputType === "text" && (
                      <textarea
                        id="convertedText"
                        rows={4}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        value={descriptionText}
                        onChange={handleTextChange}
                        placeholder="Write the Sentence"
                      />
                    )}
                  </div>
                  {file && (
                    <p className="mt-2 text-sm text-gray-500">
                      File selected: {file.name}
                    </p>
                  )}
                </div>
              )}
              {(descriptionText || convertedText) && (
                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={printConvertedText}
                  >
                    Predict
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <footer className="text-center pb-6 text-gray-600">
        © {new Date().getFullYear()} AI Disease Detection. All rights reserved.
      </footer>
    </div>
  );
}
