import CardProduto from "../components/cardProduto";
import { StyleListagem } from "../globalStyled/style";
import React, { useEffect, useState } from 'react';


function ListagemBrincos() {
    const [produtos, setProdutos] = useState([]);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        const sheetId = '1HljF1sRUJLsD-309vdNLGfr0J979ZDTWuaCnX7HWRdc'; // ID da sua planilha
        const range = 'veri!A:D'; // Intervalo desejado (ex: A:A)
        const apiKey = 'AIzaSyA24K83CHWjpfqemHLOgv6OtV2sFdT16WA'

        const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                throw new Error(`Erro HTTP ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                const linhas = data.values || [];

                // Transforma cada linha em um objeto com nome, descrição e preço
                const produtosTratados = linhas.map((linha, index) => ({
                id: index,
                nome: linha[0] || '',
                descricao: linha[1] || '',
                preco: linha[2] || '',
                imagem: linha[3] || '',
                }));

                setProdutos(produtosTratados);
            })
            .catch((err) => {
                console.error('Erro ao buscar dados da planilha:', err);
                setErro(err.message);
            });
        }, []);

    

    return (
        <StyleListagem>
            <h2 className="nameSection">Catálogo de Brincos:</h2>
                {erro && <p style={{ color: 'red' }}>Erro: {erro}</p>}
                <ul className="listagem">
                    {produtos.map((produto) => (
                    <li key={produto.id}>
                        <CardProduto
                        image={produto.imagem}
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