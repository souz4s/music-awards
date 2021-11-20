import { Router } from 'express'

const router = Router()

router.get('/hello', (req, res) => {
    var date = new Date()
    return res.json({ date: date.toString() })
})

module.exports = router;