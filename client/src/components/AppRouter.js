import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { authRoutes } from '../routes'

function AppRouter() {
    const isAuth = false
    return (
        <Routes>
            {isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path}  element={<Component/>} exact /> //exact указывает на то что путь должен точно совпадать
            )}
        </Routes>
    )
}

export default AppRouter
