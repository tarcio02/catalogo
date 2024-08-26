import styled from "styled-components";

export const StyleHeader = styled.div`
    width: 100%;
    background-color: #000;
    border: solid black 1px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
    margin-bottom: 8px;

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        gap: 8px;
        margin: 16px auto;
        color: #D3D3D3;

        h1{
            .title{
                font-size: 40px;
                font-family: serif;
                font-weight: 400;
            }
            .sub{
                font-size: 32px;
                font-family: serif;
                font-weight: 100;
                i{
                    font-size: 18px;
                }
            }
        }
    }

    ul{
        
        display: flex;
        align-items: center;
        justify-content: space-around;
        list-style: none;
        width: 90%;

        .noActive{
            text-decoration: none;
            color: #D3D3D3;
            padding: 4px;
        }

        .active{
            color: #000;
            background-color: #f0c11a;
            padding: 4px;
            border-radius: 16px;
            text-decoration: none;
        }
    }
`