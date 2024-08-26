import CardProduto from "../components/cardProduto";
import { StyleListagem } from "../globalStyled/style.js";

function ListagemColares() {
    const produtos = [
        {
            image: 'https://cdn.pixabay.com/photo/2016/10/13/21/48/necklace-1738881_1280.jpg',
            id: 1, 
            nome: 'Colar de casamento', 
            preco: '1.997,99',
            descricao: 'Colar de ouro 0,3mm de espessura e 4g de peso'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2016/10/13/21/48/necklace-1738881_1280.jpg',
            id: 2, 
            nome: 'Colar de ouro', 
            preco: '5.997,99',
            descricao: 'Corrente de ouro 0,3mm de espessura e 4g de peso'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2016/10/13/21/48/necklace-1738881_1280.jpg',
            id: 3, 
            nome: 'Colar de prata', 
            preco: '3.997,99',
            descricao: 'pulseira de ouro 0,3mm de espessura e 4g de peso'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2016/10/13/21/48/necklace-1738881_1280.jpg',
            id: 4, 
            nome: 'Colar de compromisso', 
            preco: '997,99',
            descricao: 'Brinco de prata 0,3mm de espessura e 4g de peso'
        }
    ]

    return (
        <StyleListagem>
            <h2 className="nameSection">Catálogo de Colares:</h2>
            <ul className="listagem" >
                {produtos.map( (produto) => (
                    <li key={produto.id} >
                        <CardProduto
                        image={produto.image}
                        nome={produto.nome}
                        preco={produto.preco}
                        descricao={produto.descricao}
                        />
                    </li> 
                ))}
            </ul>
        </StyleListagem>
    )
}

export default ListagemColares