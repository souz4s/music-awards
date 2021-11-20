import { Router } from 'express'

import MusicsController from '../controllers/MusicsController'

const router = Router()

const musicsController = new MusicsController()

router.get('/hello', (req, res) => {
    var date = new Date()
    return res.json({ date: date.toString() })
})

/**
 * Musics Routes
 */

router.get('/music', (req, res) => musicsController.index(req, res))
router.post('/music', (req, res) => musicsController.store(req, res))
router.get('/music/:musicId', (req, res) => musicsController.show(req, res))
router.put('/music/:musicId', (req, res) => musicsController.update(req, res))
router.delete('/music/:musicId', (req, res) => musicsController.destroy(req, res))

module.exports = router;