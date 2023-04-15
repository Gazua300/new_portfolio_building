import styled from 'styled-components'



export const Container = styled.div`
    font-size: 15pt;
    
    h1{
        font-family: 'Cormorant Garamond', serif;
        text-align: center;
        text-shadow: 2px 2px 4px black;
    }
  
    .firstTitle{
        margin-top: 10vh;
    }
    
    
    .matrixContainer{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }
    
    .matrix{
        margin-top: 10vh;
        width: 300px;
        box-shadow: 3px 3px 6px black;
        padding: 5px;
    }
    
    .matrix:hover{
        border: 1px solid whitesmoke;
        cursor: pointer;
        transition: 1s;
        animation: pulse 1s infinite;
    }
    
    @keyframes pulse {
        0%{
        border-color: pink;
        }
        50%{
        border-color: palevioletred;
        }
        100%{
        border-color: purple;
        }
        
    }
    
    .matrixTxt{
        margin: 5px;
    }
    
    a{
        color: whitesmoke;
        text-decoration: underline;
    }
    
    footer{
        text-align: center;
        margin-top: 30vh;
    }
    
    
    @media(max-width: 780px){
        .matrixContainer{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        }  
    }
    
    @media(max-width: 675px){
        .matrixContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1.5rem;
        }
    
        a{
        font-size: 15pt;
        }
    }
`