import React, { useState } from 'react';
import { FaConnectdevelop } from 'react-icons/fa';
import avatar from '../../assets/images/avatar/avatar.PNG';
import MyCard from '../../components/MyCard';
import NavList from '../../components/NavList';
import { Container, Header, NavBar, Toggle } from './styles';

const Dashboard = _ =>{
    const [on, setOn] = useState(false);
    
    function handleToggle(){
        const collapse = document.querySelector('..collapse-nav');
        const collapseToggled = document.querySelector('collapse-nav.toggled');

        if(collapse && !collapseToggled){
            setOn(true);
            collapse.classList.add('toggled');
        }else{
            setOn(false);
            collapse.classList.remove('toggled');
        }
    }
    
    return(
        <>
            <Header>
                <NavBar>
                    <a href='/Portifolio-2.0' className='logo'>
                        Abilton Dias
                        <FaConnectdevelop size={34} />
                    </a>
                    <Toggle on={on} onClick={handleToggle}>
                        <span className='icon__bar'></span>
                        <span className='icon__bar'></span>
                        <span className='icon__bar'></span>
                    </Toggle>
                    <NavList />
                </NavBar>
            </Header>

            <Container>
                <MyCard  title='Abilton Dias' subTitle='Web Developer' avatar={avatar}/>
            </Container>
        </>
    )
}

export default Dashboard;