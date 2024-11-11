from flask import Flask, request, jsonify,send_from_directory
import pickle 
from flask_cors import CORS
import re
import nltk
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer
from Transcribe import Transcribe

nltk.download('stopwords')
nltk.download('wordnet')
nltk.download('omw-1.4')

app = Flask(__name__)
CORS(app)


with open('svm_model.pkl', 'rb') as model_file:
    model = pickle.load(model_file)
with open('tfidf_vectorizer.pkl', 'rb') as vectorizer_file:
    tfidf = pickle.load(vectorizer_file)


stop_words = set(stopwords.words('english'))
lemmatizer = WordNetLemmatizer()

client=os.path.join(os.getcwd(),"..","app","dist")

@app.route("/",defaults={"filename":""})
@app.route("/<path:filename>")
def index(filename):
    if not filename:
        filename="index.html"
    return send_from_directory(client,filename)

def preprocess_text(text):
    text = text.lower()
    text = re.sub(r'[^a-z\s]', '', text)
    tokens = [lemmatizer.lemmatize(word) for word in text.split() if word not in stop_words]
    return ' '.join(tokens)

@app.post('/predict')
def predict():
    input_text = request.json.get("input")

    if not input_text:
        return jsonify({"error": "No input text provided"}), 400
    
    processed_text = preprocess_text(input_text)
    vectorized_text = tfidf.transform([processed_text])
    prediction = model.predict(vectorized_text)
    return jsonify({"prediction": prediction[0]})


@app.post('/audio/convert')
def audio():
    if 'audio' not in request.files:
        return jsonify({"error": "No audio file provided"}), 400
    audiofile = request.files['audio']
    audiopath = './audios/' + audiofile.filename
    audiofile.save(audiopath)
    return {"text": Transcribe(audiopath)}
