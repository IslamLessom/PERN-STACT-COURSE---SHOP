const Router = require('express')
const router = new Router()

const deviceRouter = require('./deviceRouter')
const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter')
const errorHandler = require('../middleware/ErrorHandlingMiddleware')

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/device', deviceRouter)

//Обработка ошибкок, последнйи Middleware
router.use(errorHandler)

module.exports = router
