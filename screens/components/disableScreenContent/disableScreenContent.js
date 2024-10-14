import React, { createContext, useState } from 'react';

// Crear el contexto
export const DisableContext = createContext();

// Crear un proveedor para el contexto
export const DisableContent = ({ children }) => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <DisableContext.Provider value={{ isDisabled, setIsDisabled }}>
      {children}
    </DisableContext.Provider>
  );
};