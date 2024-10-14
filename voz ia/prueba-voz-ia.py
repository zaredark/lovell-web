import openai

# Configura tu API key
openai.api_key = 'key-app'

# Texto de inicio para que el modelo continúe
prompt_text = 'Di "No Patricio, la mayonesa no es un instrumento."'

# Parámetros de la solicitud
response = openai.Completion.create(
  engine="text-davinci-002",
  prompt=prompt_text,
  temperature=0.7,
  max_tokens=150
)

# Imprime el texto generado por el modelo
print(response.choices[0].text.strip())