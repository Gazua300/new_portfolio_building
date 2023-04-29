import { Container } from "./style"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"

export default function Home(){
    return(
        <Container>
            <Header/>
            <h3 className='firstTitle'>Flamarion França</h3>
            <div className='firstContent'>
                Sou desenvolvedor web e mobile fullstack junior em busca de experiência profissional,
                e este site representa o portfólio dos meus principais projetos.
                São aplicativos mobile, frontend, backend, fullstack e API's.
                A intenção é apresentar minhas habilidades em programação
                mobile e web não só para empresas, mas também como uma forma de acompanhar meu processo evolutivo,
                à medida que vou estudando e adquirindo mais conhecimento na área, por isso esse portfólio estará em
                constante atualização tanto no aprimoramento dos projetos que já apresento aqui como no acréscimo de outros ao longo do tempo.
                Também tive o cuidado de mantér a responsividade em todos os projetos.                
            </div>
            <Footer/>            
        </Container>
    )
}