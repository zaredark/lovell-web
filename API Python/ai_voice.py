from flask import Flask, jsonify, request
from gtts import gTTS
from playsound import playsound
import os
import time

app = Flask(__name__)

# Se crea algo por el estilo como un "método"
@app.route("/generate_text")
def test_message():
    text = "Esto es un texto de prueba para ver si funciona la conexion entre React y Python"
    return jsonify({'text': text})

@app.route("/speech", methods = ['POST'])
def txtSpeech():
    data = request.get_json()
    txtSpeech = data['data']
    print("Recibido pa")
    lang = 'es'

    tts = gTTS(text=txtSpeech, lang=lang, slow=False)
    tts.save("texto.mp3")
    playsound("texto.mp3")
    return jsonify({'speech': tts})



if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')