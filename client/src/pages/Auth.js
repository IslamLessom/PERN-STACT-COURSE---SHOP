import React from 'react'
import { Button, Card, Container, Form } from "react-bootstrap"
import { NavLink, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'

function Auth() {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  console.log(location.pathname)

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш email..."
          />

          <Form.Control
            className="mt-3"
            placeholder="Введите ваш пароль..."
          />
          <Form className='d-flex justify-content-between'>
            {isLogin ?
              <div className="mt-3">
                Нет аккаунта ? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink>
              </div>
              :
              <div className="mt-3">
                Есть аккаунт ? <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
              </div>
            }
            <Button
              className="mt-3 align-self-end"
              variant={"outline-success"}
            >
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
          </Form>
        </Form>
      </Card>
    </Container>
  )
}

export default Auth
