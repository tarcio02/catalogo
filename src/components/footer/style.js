import styled from "styled-components";

export const StyleFooter = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    position: absolute;
    gap: 16px;
    padding: 24px;
    margin-top: 24px;
    color: white;
    background-color: black;
    width: 100%;

    /* h1{
        font-size: 40px;
        .title, .sub{
            font-family: serif;
            font-weight: 200;
        }
        i{
            font-size: 24px;
        }
    } */

    .info{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .contact{
            display: flex;
            flex-direction: column;
            gap: 8px;
            span{
                display: flex;
                gap: 8px;
                color: #D3D3D3;
                i{
                    font-size: 18px;
                }
            }
        }

        .sociais{
            display: flex;
            gap: 16px;
            
            a{
                font-size: 36px;
                color: #D3D3D3;
            }
        }
    }

    address{
        font-weight: 100;

        .space{
            margin-right: 8px;
        } 
    }

`