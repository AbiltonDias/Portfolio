import React, {useEffect} from 'react';
import Aos from 'aos';
import { FaBook, FaCoffee, FaDev, FaDownload, FaGamepad, FaLinux, FaMoneyBillAlt, FaMusic, FaReact, FaTheaterMasks } from 'react-icons/fa';
//import Cv from './../../assets/files/Curriculo.pdf';
import HeaderSection from '../../components/HeaderSection';
import {AboutSection, ListDetails, ListMyInterests } from './styles';

const About = _ => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
        })
    }, []);

    return(
        <AboutSection id="about">
            <HeaderSection content="Sobre mim" icon={< FaDev size={34}/>} />

            <p className="description" data-aos="fade-up">

                <span>Olá, eu me chamo Abilton Dias.</span> Sou Analista de Sistemas, estou
                sempre em busca de novos conhecimentos. Meu Objetivo é sempre está trabalhando em uma
                equipe de desenvolvimento, implementando novas tecnologias e melhorando as existentes,
                gosto de imagens, então me identifico com FrontEnd, criação de páginas otimizadas, e
                claro no ambiente onde estou gosto de compartilhar conhecimentos e experiências,
                adquirir experiência e principalmente poder impactar positivamente na vida das pessoas.
                Sou  responsável, simpático e pro ativo, gosto de ir visitar amigos, praia, viajar e conhecer pessoas novas.
                Meus principais valores são, ética, foco no resultado, família e ajudar o próximo.
            </p>
            <h2 className="title_details" data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="200"
                data-aos-offset="0"
            >
                Detalhes Pessoais
            </h2>
            <ListDetails data-aos="fade-up">
                <li>
                    <h4 className="details__title"> Data de <br /> Nascimento </h4>
                    <p className="response_details">
                        05 de Junho ( 32 anos )
                    </p>
                </li>
                <li>
                    <h4 className="detail__title">Telefone</h4>
                    <p className="response_details">
                        +55 9 8780-9527
                    </p>
                </li>
                <li>
                    <h4 className="detail__title">E-mail</h4>
                    <p className="response_details">
                        abiltongd@gmail.com
                    </p>
                </li>
                <li>
                    <h4 className="detail__title">Endereço</h4>
                    <p className="response_details">
                        Fortaleza, CE
                    </p>
                </li>
                <li>
                    <h4 className="detail__title">Trabalho</h4>
                    <p className="response_details dev">
                        Developer Software
                    </p>
                </li>
            </ListDetails>

            <h2 className="title__myInterests" data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="200"
                data-aos-offset="0"
            >
                Meus interesses
            </h2>
        </AboutSection>
    )

};

export default About;
