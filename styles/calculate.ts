import styled from 'styled-components'

const StyleCalculate = styled.section`
    background-image: linear-gradient(#375435, #000) ;
    min-height: 100vh;
    padding: 150px;
    

    .calculator{
        background-color: rgba(255,255,255,0.5);
        border-radius: 20px;
        padding: 45px 30px;
        max-width: 540px;
        width: 100%;
        margin: 0 auto;

        .screen{
            background-color: #fff;
            padding: 20px;
            border-radius: 20px;
            text-align: end;
            font-size: 30px;
            margin-bottom: 20px;
        }

        .buttons{
            display: flex;
            flex-direction: column;

            button{
                border: none;
                border-radius: 15px;
                font-size: 30px;
                color: #fff;
                max-width: 100px;
                height: 75px;
                width: 100%;
                margin: 5px;
                box-shadow:  4px 8px 6px #000;
            }

            .lightgrey{
                background-color: #616161;
            }

            .darkgrey{
                background-color: #272727;
            }

            .green{
                background-color: #E6A845;
            }

            .row{
                display: flex;
                justify-content: space-around;
                margin-bottom: 20px;

                .zero{
                    max-width: 250px;
                }
            }

            .column{
                display: flex;
                flex-direction: column;
            }

        }
    }
`

export default StyleCalculate;