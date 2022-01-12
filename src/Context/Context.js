import React, { useState, createContext } from "react";

export const TextContext = createContext();

export function TextProvider({ children }) {
  const [textInput, setTextInput] = useState("");

  return (
    <TextContext.Provider
      value={{
        textInput,
        setTextInput,
      }}
    >
      {children}
    </TextContext.Provider>
  );
}
