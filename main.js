import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>Planilha do Vinicius</h1>
      <p>Dashboard moderno no ar!</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);