from tkinter import *
from gtts import gTTS
from playsound import playsound
import time
import os

def createScreen(screen):
    def playSpeech():
        text = txtToSpeech.get()
        language = 'es-us'


        speech = gTTS(text = text, lang = language, slow = False)
        speech.save("texto.mp3")
        time.sleep(1)
        playsound("texto.mp3")

    screen.title('Pantalla con voz')
    screen.geometry('400x500')

    global txtToSpeech
    txtToSpeech = StringVar()
    Label(screen, text="Text to Speech").place(x=5, y=210)
    Entry(screen, textvariable=txtToSpeech).place(x=100, y=210)

    Button(screen, command=playSpeech, text="Reproducir").place(x=40, y=450)

    screen.mainloop()

createScreen(Tk())
#os.system("texto.mp3")