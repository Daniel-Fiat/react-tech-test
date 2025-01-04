import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/routes"; // Asegúrate de importar correctamente las rutas
import HeaderComponent from "./components/header/header";
import { Container } from "react-bootstrap";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Container>
        <HeaderComponent />
        <AppRoutes />
      </Container>
    </BrowserRouter>
  );
};

export default App;
