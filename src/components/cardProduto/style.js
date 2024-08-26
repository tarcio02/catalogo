import styled from "styled-components";

export const StyleCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 350px;
    border-radius: 8px;
    padding: 8px;
    background-color:  #f5f5f5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1);

    button {
        border: none;
        background-color: #f0c11a;
        color: black;
        border-radius: 8px;
        width: 100%;
        height: 30px;
    }

    .descript{
        display: flex;
        flex-direction: column;
        text-align: start;
        gap: 4px;
        width: 100%;

        img{
            margin: 0 auto;
            width: 100%;
            max-height: 180px;
            max-width: 180px;
        }

        h2{
            font-size: 18px;
        }

        span{
            font-size: 16px;
            color: green;
        }

        p{
            font-size: 12px;
        }
    }
`