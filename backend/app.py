from flask import Flask, request, jsonify
import pickle 
from flask_cors import CORS
from Transcribe import Transcribe
app = Flask(__name__)
CORS(app)


tfidf=pickle.load(open("tfidf.pkl",'rb'))
model=pickle.load(open("model.pkl",'rb'))


@app.post('/predict')
def predict():
    prediction=model.predict(tfidf.transform([request.json.get("input")]))[0]
    print(request.json.get('input')+" : "+prediction)
    return jsonify(prediction)

@app.post('/audio/convert')
def audio():
    audiofile=request.files['audio']
    audiopath='./audios/'+audiofile.filename
    audiofile.save(audiopath)
    return {"text":Transcribe(audiopath)}

if __name__=="__main__":
    app.run(debug=True)