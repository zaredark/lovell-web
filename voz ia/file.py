from gtts import gTTS
import os

text = '''Tienes un mensaje'''
language = 'es-us'

speech = gTTS(text = text, lang = language, slow = False)

speech.save("texto.mp3")
os.system("texto.mp3")