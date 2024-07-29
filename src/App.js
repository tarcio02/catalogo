import Header from "./components/header";
import ListagemProduto from "./ListaProdutos";
import Footer from "./components/footer";

import { GlobalStyled } from "./globalStyled/GlobalStyled";

function App() {
  return (
    <>
      <GlobalStyled />
      <Header />
      <ListagemProduto />
      <Footer />
    </>
  );
}

export default App;
