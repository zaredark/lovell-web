import os
import numpy as np
from scipy.io import wavfile


def convertir_audio_a_npz(ruta_audio, ruta_salida, semantic):
    # Cargar el archivo de audio
    sr, y = wavfile.read(ruta_audio)
    
    # Guardar los datos de audio y la frecuencia de muestreo en un archivo .npz
    np.savez(ruta_salida, audio=y, sr=sr, semantic_prompt=semantic)
    
# Ejemplo de uso
ruta_audio = 'voz ia\\voices\\ghost-rider-mvsc3.wav'  # Cambia esto por la ruta a tu archivo de audio
ruta_salida = 'voices\\..\\voz ia\\bark\\bark\\assets\\prompts\\v2\\ai_voice1.npz'  # Cambia esto por la ruta donde quieres guardar el archivo .npz
semantic_prompt = "Este es un ejemplo de semantic prompt."

#ruta_audio = os.path.join('ghost-rider-mvsc3.wav')
#ruta_salida = os.path.join('..', 'bark', 'bark', 'assets', 'prompts', 'ai_voice1.npz')

convertir_audio_a_npz(ruta_audio, ruta_salida, semantic_prompt)
print("Conversion exitosa.")