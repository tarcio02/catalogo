import CardProduto from "../components/cardProduto";
import { StyleListagem } from "../globalStyled/style";

function ListagemBrincos() {
    const produtos = [
        {
            image: 'https://cdn.pixabay.com/photo/2021/08/03/06/47/earrings-6518631_1280.jpg',
            id: 1, 
            nome: 'Brincos', 
            preco: '1.997,99',
            descricao: 'Anel de ouro 0,3mm de espessura e 4g de peso'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2021/08/03/06/47/earrings-6518631_1280.jpg',
            id: 2, 
            nome: 'Brinco de ouro', 
            preco: '5.997,99',
            descricao: 'Corrente de ouro 0,3mm de espessura e 4g de peso'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2021/08/03/06/47/earrings-6518631_1280.jpg',
            id: 3, 
            nome: 'Brinco de prata', 
            preco: '3.997,99',
            descricao: 'pulseira de ouro 0,3mm de espessura e 4g de peso'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2021/08/03/06/47/earrings-6518631_1280.jpg',
            id: 4, 
            nome: 'Brinco de compromisso', 
            preco: '997,99',
            descricao: 'Brinco de prata 0,3mm de espessura e 4g de peso'
        }
    ]

    return (
        <StyleListagem>
            <h2 className="nameSection">Catálogo de Brincos:</h2>
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

export default ListagemBrincos