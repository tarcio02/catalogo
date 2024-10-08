import CardProduto from "../components/cardProduto";
import { StyleListagem } from "../globalStyled/style";

function ListagemProduto () {
    const produtos = [
        {
            image: 'https://cdn.pixabay.com/photo/2019/11/24/14/15/diamond-4649510_1280.png',
            id: 1, 
            nome: 'Anel de casamento', 
            preco: '1.997,99',
            descricao: 'Anel de ouro 0,3mm de espessura e 4g de peso'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2019/11/24/14/15/diamond-4649510_1280.png',
            id: 2, 
            nome: 'Anel de ouro', 
            preco: '5.997,99',
            descricao: 'Corrente de ouro 0,3mm de espessura e 4g de peso'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2019/11/24/14/15/diamond-4649510_1280.png',
            id: 3, 
            nome: 'Anel de prata', 
            preco: '3.997,99',
            descricao: 'pulseira de ouro 0,3mm de espessura e 4g de peso'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2019/11/24/14/15/diamond-4649510_1280.png',
            id: 4, 
            nome: 'Anel de compromisso', 
            preco: '997,99',
            descricao: 'Brinco de prata 0,3mm de espessura e 4g de peso'
        }
    ]

    return (
        <StyleListagem>
            <h2 className="nameSection">Catálogo de Anéis:</h2>
            <ul className="listagem" >
                {produtos.map( (produto) => (
                    <li key={produto.id} >
                        <CardProduto
                        image={produto.image}
                        nome={produto.nome}
                        preco={produto.preco}
                        descricao={produto.descricao}
                        id={produto.id}
                        />
                    </li> 
                ))}
            </ul>
        </StyleListagem>
    )
}

export default ListagemProduto