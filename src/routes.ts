import { Router } from 'express'

import NewsController from './controllers/NewsController'

export const router = Router()

// router.get('/', NewsController.getNews)
router.get('/:search', NewsController.getNews)

router.get('/hotnews', NewsController.getHotNews)

// router.get('/users', UserController.findAll)
// router.get('/users/:userId', UserController.findOne)
// router.post('/users', UserController.create)
// router.put('/users/:userId', UserController.update)
// router.delete('/users/:userId', UserController.destroy)
