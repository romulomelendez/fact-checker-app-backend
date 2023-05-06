import { NewsProps, ArticleProps, ArticlesProps } from "./types"

export const buildNewsOjbect = async (news: object[] | undefined) => {

    try {
            
        let arrayNewsObj = [] as NewsProps[]
        let baseNews: object
        news?.map((item: any) => {

            baseNews = {
                "originalNews": {

                    "originalTitle": item.text,
                    "originalClaimant": item.claimant,
                    "originalClaimDate": handleTimeStamp(item.claimDate)   
    
                }
            }

            let newsReview = [] as object[]
            item?.claimReview.map((review: any) => {

                let auxNews = {

                    "publisherName": review.publisher.name,
                    "publisherSite": review.publisher.site,
                    "reviewDate": handleTimeStamp(review.reviewDate),
                    "textualRating": review.textualRating,
                    "title": review.title,
                    "urlNews": review.url,
                    "languageCode": review.languageCode
                }

                newsReview.push(auxNews)

            })
            
            // @ts-ignore:next-line
            baseNews.newsReview = newsReview
            // @ts-ignore:next-line
            arrayNewsObj.push(baseNews)
            
        })
        return arrayNewsObj

    } catch (err) {
        console.error(err)
        return
    }

}

export const buildTopHeadlinesNewsOjbect = async (articles: ArticlesProps[]) => {

    try {
            
        let topHeadlinesArray: ArticleProps[] = []

        articles.map((article) => {

            let topNewsObj = {
                "author": article.author,
                "title": article.title,
                "topNewsUrl": article.url,
                "publishedAt": handleTimeStamp(article.publishedAt)
            }

            topHeadlinesArray.push(topNewsObj)

        })

       return topHeadlinesArray

    } catch (err) {
        console.error(err)
        return
    }

}

const createNewDateFormat = ( date: Date ): string => {

    return date.getUTCDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()

}

export const handleTimeStamp = (timestamp: string): string => {

    if( timestamp === undefined )
        return ''

    return createNewDateFormat(new Date(timestamp))

}