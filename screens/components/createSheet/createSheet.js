import React, { useRef, useState, useEffect, useMemo } from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';

let ReactQuill;

const EditorScreen = () => {
  const [content, setContent] = useState(''); // Contenido del editor
  const [readOnly, setReadOnly] = useState(false); // Control del modo de solo lectura
  const quillRef = useRef(); // Referencia al editor
  const [isMounted, setIsMounted] = useState(false); // Control del montaje en cliente

  // Cargar react-quill solo si estamos en la web
  useEffect(() => {
    if (Platform.OS === 'web') {
      ReactQuill = require('react-quill');
      require('react-quill/dist/quill.snow.css'); // Estilo del editor
    }
    setIsMounted(true); // Indicar que el componente está montado
  }, []);

  if (Platform.OS !== 'web') {
    return <Text>El editor solo está disponible en la versión web.</Text>;
  }

  if (!isMounted) {
    return <Text>Cargando editor...</Text>;
  }

  return (
    <View style={[styles.container, {alignItems: 'center'}]}>
      {/* Renderiza el editor solo si está en web */}
      {ReactQuill && (
        <ReactQuill
          ref={quillRef}
          readOnly={readOnly}
          value={content}
          onChange={setContent}
          theme="snow"
          style={{ height: 300, width: 700 }}
        />
      )}

      <View style={styles.controls}>
        <Button
          title={`Modo: ${readOnly ? 'Lectura' : 'Edición'}`}
          onPress={() => setReadOnly(!readOnly)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  content: {
    marginTop: 20,
  },
});

export default EditorScreen;