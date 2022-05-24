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
            font-size: 50px;
        }

        span{
            color: #375435;
        }
    }

    .btn{
        font-size: 30px;
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
   
`