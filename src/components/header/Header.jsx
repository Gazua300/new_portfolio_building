import { useRef } from 'react'
import { AiFillHome, AiFillContacts } from 'react-icons/ai'
import { BsFillCollectionFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { Container } from './style'


export default function Header(){
    const navigate = useNavigate()
    const home = useRef(null)
    const homeCaption = useRef(null)
    const contact = useRef(null)
    const contactCaption = useRef(null)
    const portfolio = useRef(null)
    const portfolioCaption = useRef(null)


    const showHome = ()=>{
        home.current.style.display = 'block'
        homeCaption.current.style.display = 'block'
    }

    const hideHome = ()=>{
        home.current.style.display = 'none'
        homeCaption.current.style.display = 'none'
    }


    const showContact = ()=>{
        contact.current.style.display = 'block'
        contactCaption.current.style.display = 'block'
    }

    const hideContact = ()=>{
        contact.current.style.display = 'none'
        contactCaption.current.style.display = 'none'
    }


    const showPorfolio = ()=>{
        portfolio.current.style.display = 'block'
        portfolioCaption.current.style.display = 'block'
    }

    const hidePortolio = ()=>{
        portfolio.current.style.display = 'none'
        portfolioCaption.current.style.display = 'none'
    }


    return(
        <Container>
            <ul>
                <li>
                    <AiFillHome className='icons home'
                        onMouseOver={showHome}
                        onMouseOut={hideHome}
                        onClick={()=> navigate('/')}/>
                </li>
                <li>
                    <AiFillContacts className='icons contact'
                        onMouseOver={showContact}
                        onMouseOut={hideContact}
                        onClick={()=> navigate('/contacts')}/>
                </li>
                <li>
                    <BsFillCollectionFill className='icons portfolio'
                        onMouseOver={showPorfolio}
                        onMouseOut={hidePortolio}
                        onClick={()=> navigate('/portfolio')}/>
                </li>
            </ul>
            <div className='header-legend'>
                <figure className='icons-container'>
                    <figcaption style={{display:'none'}} ref={homeCaption}>Página inicial</figcaption>
                        <img src="https://www.iconarchive.com/download/i103430/paomedia/small-n-flat/house.1024.png"
                            className='home-icon'
                            ref={home}
                            alt="Home-icon" />
                </figure>
                <figure className='icons-container'>
                    <figcaption style={{display:'none'}} ref={contactCaption}>
                            Contatos
                        </figcaption>
                        <img src="https://help.apple.com/assets/63C06568C1AA4C471C180EF8/63C06576C1AA4C471C180F00/en_US/97d1bbc73dbf602c4bc123c17bb5def0.png"
                            className='contact-icon'
                            ref={contact}
                            alt="contact-icon"/>
                </figure>
                <figure className='icons-container' style={{width:'20vw'}}>
                    <figcaption style={{display:'none'}} ref={portfolioCaption}>
                        Portfólio dos principais projetos
                    </figcaption>
                    <img src="https://cdn3d.iconscout.com/3d/premium/thumb/financial-portfolio-6456752-5348960.png"
                        className='portfolio-icon'
                        ref={portfolio}
                        alt="portfolio-icon"/>
                </figure>
            </div>
        </Container>
    )
}