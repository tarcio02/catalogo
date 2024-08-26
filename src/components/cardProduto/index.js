import {StyleCard } from "./style";

function CardProduto ({image, nome, preco, descricao, id}) {

    const message = `Olá, gostaria de mais informações sobre o produto: ${nome} (ID: ${id}).`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=5577991505805&text=${encodeURIComponent(message)}`;


    return (
        <StyleCard>
            <div className="descript">
                <img alt={nome} src={image}></img>
                <h2>{nome}</h2>
                <span>R$ {preco}</span>
                <p>{descricao}</p>
            </div>
            <button onClick={() => window.open(whatsappUrl, '_blank')}>Mais informações</button>
        </StyleCard>
    )
}

export default CardProduto