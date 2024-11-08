import React from 'react'
import { ArrowRight, Mic, Text } from 'lucide-react'

export default function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <main className="container mx-auto px-6 py-12 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-6">
          AI-Powered Disease Detection
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
          Describe your symptoms through audio or text, and our advanced AI will help identify potential health issues.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <div className="flex items-center justify-center bg-blue-500 text-white rounded-lg p-4">
            <Mic className="w-6 h-6 mr-2" />
            <span>Audio Input</span>
          </div>
          <div className="flex items-center justify-center bg-blue-500 text-white rounded-lg p-4">
            <Text className="w-6 h-6 mr-2" />
            <span>Text Input</span>
          </div>
        </div>
        <a 
          href="/input" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full text-lg flex items-center transition duration-300 ease-in-out transform hover:scale-105"
        >
          Get Started
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </main>
      <footer className="text-center pb-6 text-gray-600">
        © {new Date().getFullYear()} AI Disease Detection. All rights reserved.
      </footer>
    </div>
  )
}