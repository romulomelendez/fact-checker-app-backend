type NewsProps = {

    "originalNews": {
        "originalTitle": string,
        "originalClaimant": string | undefined,
        "originalClaimDate": string | undefined
    },
    "newsReview": [
        {
            "publisherName": string,
            "publisherSite": string,
            "reviewDate": string,
            "textualRating": string,
            "title": string,
            "urlNews": string,
            "languageCode": string
        }
    ]
}

export const buildNewsOjbect = async (news: object[] | undefined) => {

    try {
            
        let arrayNewsObj = [] as NewsProps[]
        let baseNews: object
        news?.map((item: any) => {

            baseNews = {
                "originalNews": {

                    "originalTitle": item.text,
                    "originalClaimant": item.claimant,
                    "originalClaimDate": item.claimDate   
    
                }
            }

            let newsReview = [] as object[]
            item?.claimReview.map((review: any) => {

                let auxNews = {

                    "publisherName": review.publisher.name,
                    "publisherSite": review.publisher.site,
                    "reviewDate": review.reviewDate,
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

export const buildTopHeadlinesNewsOjbect = async (articles: any) => {

    try {
            
        let topHeadlinesArray: object[] = []

        articles.map((article: any) => {

            let topNewsObj: any = {
                "author": article.author,
                "title": article.title,
                "topNewsUrl": article.url,
                "publishedAt": article.publishedAt
            }

            topHeadlinesArray.push(topNewsObj)

        })

       return topHeadlinesArray

    } catch (err) {
        console.error(err)
        return
    }

}