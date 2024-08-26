import CardProduto from "../components/cardProduto";
import { StyleListagem } from "../globalStyled/style";

function ListagemPulseiras() {
    const produtos = [
        {
            image: 'https://cdn.pixabay.com/photo/2016/11/11/17/34/diamond-1817291_1280.png',
            id: 1, 
            nome: 'Pulseira de casamento', 
            preco: '1.997,99',
            descricao: 'Pulseira de ouro 0,3mm de espessura e 4g de peso'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2016/11/11/17/34/diamond-1817291_1280.png',
            id: 2, 
            nome: 'Pulseira de ouro', 
            preco: '5.997,99',
            descricao: 'Corrente de ouro 0,3mm de espessura e 4g de peso'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2016/11/11/17/34/diamond-1817291_1280.png',
            id: 3, 
            nome: 'Pulseira de prata', 
            preco: '3.997,99',
            descricao: 'pulseira de ouro 0,3mm de espessura e 4g de peso'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2016/11/11/17/34/diamond-1817291_1280.png',
            id: 4, 
            nome: 'Pulseira de compromisso', 
            preco: '997,99',
            descricao: 'Brinco de prata 0,3mm de espessura e 4g de peso'
        }
    ]

    return (
        <StyleListagem>
            <h2 className="nameSection">Catálogo de Pulseiras:</h2>
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

export default ListagemPulseiras