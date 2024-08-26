import styled from "styled-components";

export const StyleWhatsapp = styled.div`
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 24px;
    right: 24px;
    width: 60px;
    height: 60px;
    border-radius: 16px;
    background-color: rgba(37, 211, 102, 0.2);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(10px);

    button{
        position: absolute;
        right: -8px;
        top: -8px;
        font-size: 12px;
        color: black;
        border: none;
        background-color: transparent;
    } 

    a{
        text-align: center;
    }

    img{
        width: 80%;
        }
`