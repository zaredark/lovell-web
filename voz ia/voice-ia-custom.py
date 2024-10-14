from transformers import AutoProcessor, BarkModel
import scipy.io

processor = AutoProcessor.from_pretrained ("suno/bark")
model = BarkModel.from_pretrained ("suno/bark")

voice_preset = "v2/es_speaker_6" #ai_voice1 es el audio de ghost rider

inputs = processor("Hola soy el huesitos flameante [laughs]", voice_preset=voice_preset)

audio_array = model.generate (**inputs)
audio_array = audio_array.cpu().numpy().squeeze()

## Save the .wav file into the disk
sample_rate = model.generation_config.sample_rate
scipy.io.wavfile.write("prueba.wav", rate=sample_rate, data=audio_array)