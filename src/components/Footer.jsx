import { BsInstagram, BsWhatsapp, BsLinkedin } from 'react-icons/bs'
import { Container } from './style'


export default function Footer(){
    const message = `Hi! We're Gazua Dev Center and how we can help you`

    return(
        <Container>
            <div className='text-footer'>
                &copy; Gazua Dev Center
            </div>
            <ul>
                <li><a href='https://www.instagram.com/gazua.keymaster' target='_blank'> <BsInstagram className='icons instagram' /></a></li>
                <li><a href={`https://api.whatsapp.com/send?phone=5571984707037&text=${message}`} target='_blank'><BsWhatsapp className='icons whatsapp'/></a></li>
                <li><a href='https://www.linkedin.com/in/gazuadev' target='_blank'><BsLinkedin className='icons linkedin'/></a></li>
            </ul>
        </Container>
    )
}