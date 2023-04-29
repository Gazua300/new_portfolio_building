import styled from 'styled-components'


export const Container = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    .text-footer{
        margin-top: 30px;
        width: 80%;
        position: relative;
        left: 50%;
        transform: translateX(-27%);
    }

    ul{
        position: relative;
        display: flex;
    }

    ul li{
        position: relative;
        list-style: none;
        margin: 0 20px;
        cursor: pointer;
    }

    ul li a{
        text-decoration: none;
    }

    ul li a .icons{
        font-size: 1.5em;
        color: #222;
    }

    .instagram:hover{
        transition: 1s;
        background: linear-gradient(45deg, purple, #dc2743);
        border-radius: 30%;
        color: purple;
    }

    .whatsapp:hover{
        transition: 1s;
        background: linear-gradient(45deg, green, #25d366);
        border-radius: 50%;
        color: green;
    }
    
    .linkedin:hover{
        transition: 1s;
        background: linear-gradient(45deg, whitesmoke, white);
        color: #1da1f2;
    }

`