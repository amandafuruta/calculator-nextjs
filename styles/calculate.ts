import styled from 'styled-components'

const StyleCalculate = styled.section`
    background-image: linear-gradient(#375435, #000) ;
    min-height: 100vh;
    padding: 40px;
    
    a{
        color: #fff;
        text-decoration: none;
        display: flex;
        align-items: center;
        margin-bottom: 30px;
    }

    .calculator{
        background-color: rgba(255,255,255,0.5);
        border-radius: 20px;
        padding: 45px 30px;
        max-width: 495px;
        width: 100%;
        margin: 0 auto;

        .screen{
            background-color: #fff;
            padding: 20px;
            border-radius: 20px;
            text-align: end;
            font-size: 30px;
            margin-bottom: 40px;
        }

        .buttons{
            display: flex;
            flex-direction: column;

            button{
                border: none;
                border-radius: 15px;
                font-size: 30px;
                color: #fff;
                max-width: 90px;
                height: 65px;
                width: 100%;
                margin: 5px;
                box-shadow:  4px 8px 6px #000;
            }

            .zero{
                max-width: 250px;
            }

        }
    }

    @media(max-width: 419px){
        padding: 40px 15px;
    }
`

export default StyleCalculate;