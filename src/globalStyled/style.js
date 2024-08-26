import styled from "styled-components";

export const StyleListagem = styled.div`
.nameSection{
    margin-left: 5%;
    font-size: 18px;
    font-weight: 300;
    margin-top: 8px;
}

    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 12px;
        list-style-type: none;
        margin-top: 16px;
        width: 90%;
        margin: 0 auto;
    }
`