import React, { useState } from 'react'
import { Mic, Text, Upload, ArrowLeft } from 'lucide-react'

export default function Input() {
  const [inputType, setInputType] = useState(null)
  const [file, setFile] = useState(null)
  const [isRecording, setIsRecording] = useState(false)
  const [convertedText, setConvertedText] = useState('')

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setFile(selectedFile)
      // Here you would typically upload the file and process it
      // For demonstration, we'll just set some placeholder text
      setConvertedText("This is where the converted text from your audio/video would appear...")
    }
  }

  const handleRecord = () => {
    setIsRecording(!isRecording)
    // Here you would typically start/stop recording
    // For demonstration, we'll just toggle the state
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Here you would typically send the data to your ML model
    alert("Form submitted! In a real app, this would send the data to your ML model.")
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Provide Your Symptom Data</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Choose Input Type</label>
              <div className="mt-2 flex gap-4">
                <button
                  type="button"
                  onClick={() => setInputType('audio')}
                  className={`flex items-center justify-center px-4 py-2 border rounded-md ${
                    inputType === 'audio' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
                  }`}
                >
                  <Mic className="w-5 h-5 mr-2" />
                  Audio
                </button>
                <button
                  type="button"
                  onClick={() => setInputType('video')}
                  className={`flex items-center justify-center px-4 py-2 border rounded-md ${
                    inputType === 'video' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
                  }`}
                >
                  <Text className="w-5 h-5 mr-2" />
                  Text
                </button>
              </div>
            </div>

            {inputType && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  {inputType === 'audio' ? 'Upload Audio or Record' : 'Upload Video'}
                </label>
                <div className="mt-2 flex items-center gap-4">
                  <label className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    <Upload className="w-5 h-5 mr-2" />
                    Upload {inputType === 'audio' ? 'Audio' : 'Video'}
                    <input type="file" className="sr-only" onChange={handleFileChange} accept={inputType === 'audio' ? 'audio/*' : 'video/*'} />
                  </label>
                  {inputType === 'audio' && (
                    <button
                      type="button"
                      onClick={handleRecord}
                      className={`flex items-center justify-center px-4 py-2 border rounded-md ${
                        isRecording ? 'bg-red-500 text-white' : 'bg-white text-gray-700'
                      }`}
                    >
                      <Mic className="w-5 h-5 mr-2" />
                      {isRecording ? 'Stop Recording' : 'Start Recording'}
                    </button>
                  )}
                </div>
                {file && <p className="mt-2 text-sm text-gray-500">File selected: {file.name}</p>}
              </div>
            )}

            <div className="mb-4">
              <label htmlFor="convertedText" className="block text-sm font-medium text-gray-700">
                Text
              </label>
              <textarea
                id="convertedText"
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                value={convertedText}
              />
            </div>

            <div className="flex justify-between items-center mt-6">
              <a href="/" className="flex items-center text-blue-600 hover:text-blue-800">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </a>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}