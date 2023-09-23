import { Router } from 'express'
import { StatusCodes } from 'http-status-codes'

const router = Router()


router.get('/', (req, res) => {
    return res.send('Olá, DEV!')
})

router.post('/teste', (req, res) => {
    return res.status(StatusCodes.CREATED).json(req.body)
})

//router.put('/teste', (req, res) => {})

//router.delete('/teste', (req, res) => {})












export { router }
