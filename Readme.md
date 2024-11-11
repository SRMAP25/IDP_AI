# IDP_AI

This project, **IDP_AI**, is an AI-based application that integrates both backend and frontend components for machine learning and information retrieval tasks. The backend is powered by Python with an SVM model, while the frontend is developed with React and Vite for a fast and seamless user experience.

## Live Demo

Check out the live version of this project here: [IDP_AI on Render](https://idp-ai.onrender.com/)

## Getting Started
Follow these instructions to clone and run the project locally.
### Prerequisites
- [Git](https://nodejs.org/en) for cloning the repository
- [Python 3](https://www.python.org/) and [pip](https://pip.pypa.io/en/stable/) for the Backend
- [Node.js](https://nodejs.org/en) and [npm](https://www.npmjs.com/) for the Frontend
### Cloning the Repository
- Open your terminal and clone the repository using the following command : 
    
    `git clone https://github.com/SRMAP25/IDP_AI.git`
- Navigate into the project directory : `cd IDP_AI`



## Project Structure

```plaintext
IDP_AI
│
├── backend
│   ├── audios                  # Audio files for processing
│   ├── venv                    # Virtual environment for backend dependencies
│   ├── app.py                  # Main backend server script
│   ├── requirements.txt        # Backend dependencies
│   ├── svm_model.pkl           # Pre-trained SVM model
│   ├── tfidf_vectorizer.pkl    # TF-IDF vectorizer for text processing
│   └── Transcribe.py           # Script for audio transcription
│
└── frontend
    ├── dist                    # Compiled frontend files
    ├── node_modules            # Frontend dependencies
    ├── src                     # Source code for the React frontend
    ├── index.html              # Main HTML file
    ├── package.json            # Frontend dependencies and scripts
    ├── postcss.config.js       # PostCSS configuration
    ├── tailwind.config.js      # Tailwind CSS configuration
    └── vite.config.js          # Vite configuration
```
## Installation
### Backend Setup
- Navigate to the backend folder : `cd backend`
- Set up a virtual environment : `python -m venv venv`
- Activate the virtual environment : 
    - On Windows : `.\venv\Scripts\activate` 
    - On macOS/Linux : `source venv/bin/activate`
- Install the required packages : `pip install -r requirements.txt`
- Run the backend server : `python app.py` or `flask --app run app `
### Frontend Setup
- Navigate to the frontend folder : `cd frontend`
- Install the dependencies : `npm install`
- Start the development server : `npm run dev`


## Technologies Used

### Backend
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![scikit-learn](https://img.shields.io/badge/scikit--learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white)
![TF-IDF](https://img.shields.io/badge/TF--IDF-00457C?style=for-the-badge&logo=tf-idf&logoColor=white)

### Frontend
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Deployment
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=black)

