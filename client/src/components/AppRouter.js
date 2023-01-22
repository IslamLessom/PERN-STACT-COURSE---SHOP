import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes'
import { SHOP_ROUTE } from '../utils/consts'
import { Context } from '../index'

function AppRouter() {
    const { user } = useContext(Context)
    return (
        //НАВИГАЦИЯ 
        //ЛОГИКА - ЕСЛИ ЧЕЛОВЕК ЗАРЕГИСТРИРОВАЛ (isAuth = TRUE) ТО ПОЛЬЗОВАТЕЛЬ БУДЕТ ИМЕТЬ ДОСТУП КО ВСЕМ ССЫЛКАМ , НО ЕСЛИ НЕТ , 
        //ТО БУДЕТ ИМЕТЬ ДОСТУП ТОЛЬКО К ОГРАНИЧЕННЫМ РОУТАМ 
        //ЕСЛИ ПОЛЬЗОВАТЕЛЬ ВВЕЛ НЕПРАВИЛЬНУЮ ССЫЛКУ ТО БУДЕТ НАПРАВЛЕН НА ГЛАВНУЮ СТРАНИЦУ
        <Routes>
            {user.isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} exact /> //exact указывает на то что путь должен точно совпадать
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} exact /> //exact указывает на то что путь должен точно совпадать
            )}
            <Route path='*' element={<Navigate to={SHOP_ROUTE} />} />
        </Routes>
    )
}

export default AppRouter
