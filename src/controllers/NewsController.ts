import { Request, Response } from 'express'
import axios from 'axios'

import { sendNews } from '../utils'

class NewsController {

    async getNews(req: Request, res: Response) {

        const { search } = req.params
        
        try {
            const rawDataNews = await axios.get(process.env.BASE_API_URL + `${search}` + '&key=' + process.env.API_KEY)
            const news = await sendNews(rawDataNews.data.claims)

            res.status(200).json(news)
        }
        catch (err: any) {
            console.error(err.message)
            res.status(404).json(err)
        }

    }

}

export default new NewsController()