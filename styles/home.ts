import styled from 'styled-components'

export const HomeStyle = styled.section`
    background-image: url("/images/bg.jpeg") ;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 100vh;
    padding: 150px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .card{
        background-color: rgba(255,255,255,0.5);
        border-radius: 20px;
        padding: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;

        h1{
            color:#fff;
            margin-right: 15px;
        }

        .span{
            color: #375435;
        }
    }

    .btn{
        border-radius: 50px;
        max-width: 200px;
        width: 100%;
        transition: 0.5s;
        padding: 5px 0;

        &:hover{
            background-color: #375435;
            color: #fff;
        }
    }

    @media(max-width: 996px){

        .card{
            padding: 30px 10px;
        }
    }

    @media only screen and (max-width: 794px){
        padding: 80px;
    }

    @media only screen and (max-width: 635px){
        padding: 45px;
    }

    @media(max-width: 612px){
        .card{
            flex-direction: column;
            padding: 30px 0;

            h1{
            margin-right: 0;
            }
        }
    }
   
`