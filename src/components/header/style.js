import styled from 'styled-components'



export const Container = styled.div`
    ul{
        position: absolute;
        top: 2%;
        right: 5%;
        display: flex;
    }   

    ul li{
        list-style: none;
        margin: 10px;
        cursor: pointer;
    }

    ul li .icons{
        font-size: 1.5em;
    }

    .home:hover{
        transition: 1s;
        background: linear-gradient(45deg, brown, whitesmoke);
        border-radius: 30%;
        color: brown;
    }

    .contact:hover{
        transition: 1s;
        background: linear-gradient(45deg, yellow, whitesmoke);
        border-radius: 30%;
        color: goldenrod;
    }

    .portfolio:hover{
        transition: 1s;
        background: linear-gradient(45deg, #51087e, whitesmoke);
        border-radius: 30%;
        color: #51087e;
    }

    .header-legend{
        position: absolute;
        top: 15%;
        right: 0;
    }

    .icons-container{
        position: absolute;
        top: 5%;
        right: 20%;
        display: flex;
        align-items: center;
    }

    .home-icon{
        display: none;
        width: 50px;
        margin-left: 15px;
    }

    .contact-icon{
        display: none;
        width: 50px;
        margin-left: 15px;
    }

    .portfolio-icon{
        display: none;
        width: 50px;
        margin-left: 3px;
    }

`