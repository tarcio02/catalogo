import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import ListagemProduto from "./ListaProdutos";
import ListagemBrincos from "./pages/ListagemBrincos";
import ListagemColares from "./pages/ListagemColares";
import ListagemPulseiras from "./pages/ListagemPulseiras";
import Footer from "./components/footer";
import Whatsapp from "./components/whatsapp";

import { GlobalStyled } from "./globalStyled/GlobalStyled";

function App() {
  return (
    <Router>
      <GlobalStyled />
      <Header />
      < Routes>
        <Route path="/" element={<ListagemProduto />} />
        <Route path="/brincos" element={<ListagemBrincos />} />
        <Route path="/colares" element={<ListagemColares />} />
        <Route path="/pulseiras" element={<ListagemPulseiras />} />
      </Routes>
      <Footer />
      <Whatsapp />
    </Router>
  );
}

export default App;
