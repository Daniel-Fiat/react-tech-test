import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/routes"; // Asegúrate de importar correctamente las rutas

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
