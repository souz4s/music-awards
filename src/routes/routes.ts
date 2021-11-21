import { Router } from 'express'

import MusicsController from '../controllers/MusicsController'
import AuthorsController from '../controllers/AuthorsController'
import GenresController from '../controllers/GenresController'

const router = Router()

const musicsController = new MusicsController()
const authorsController = new AuthorsController()
const genresController =  new GenresController()

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

/**
 * Authors Routes
 */

router.get('/author', (req, res) => authorsController.index(req, res))
router.post('/author', (req, res) => authorsController.store(req, res))
router.get('/author/:authorId', (req, res) => authorsController.show(req, res))
router.put('/author/:authorId', (req, res) => authorsController.update(req, res))
router.delete('/author/:authorId', (req, res) => authorsController.destroy(req, res))

/**
 * Genres Routes
 */

router.get('/genre', (req, res) => genresController.index(req, res))
router.post('/genre', (req, res) => genresController.store(req, res))
router.get('/genre/:genreId', (req, res) => genresController.show(req, res))
router.put('/genre/:genreId', (req, res) => genresController.update(req, res))
router.delete('/genre/:genreId', (req, res) => genresController.destroy(req, res))

module.exports = router;