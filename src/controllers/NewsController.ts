import axios from 'axios'
import { Request, Response } from 'express'

import { buildNewsOjbect, buildTopHeadlinesNewsOjbect } from '../utils'

class NewsController {

    async getNews(req: Request, res: Response) {

        const { search } = req.params
        
        try {
            const rawDataNews = await axios.get(process.env.BASE_API_URL + `${search}` + '&key=' + process.env.API_KEY)
            const news = await buildNewsOjbect(rawDataNews.data.claims)

            res.status(200).json(news)
        }
        catch (err: any) {
            console.error(err.message)
            res.status(404).json(err)
        }

    }

    async getHotNews(req: Request, res: Response) {

        try {
            const rawDataTopNews: any = await axios.get(process.env.BASE_API_URL_TOP_HEADLINES as string + process.env.API_KEY_TOP_HEADLINES)
            const topNews = await buildTopHeadlinesNewsOjbect(rawDataTopNews.data.articles)

            res.status(200).json(topNews)
        }
        catch (err: any) {
            console.error(err.message)
            res.status(404).json(err)
        }

    }

}

export default new NewsController()