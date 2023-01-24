import React, { useContext } from 'react'
import { Context } from '..';

//bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Button } from 'react-bootstrap';

//react-router
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE, SHOP_ROUTE, ADMIN_ROUTE } from '../utils/consts';
import { useNavigate } from 'react-router-dom';

//mobx
import { observer } from 'mobx-react-lite'

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>КупиДевайс</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>Админ Панель</Button>
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)} style={{ marginLeft: '6px' }} >Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }

            </Container>
        </Navbar>
    )
})

export default NavBar
