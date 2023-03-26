export type NewsProps = {

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

export type ArticlesProps = {
    source: { id: string, name: string },
    author: string,
    title: string,
    description: string | null,
    url: string,
    urlToImage: string | null,
    publishedAt: string,
    content: string | null
}

export type ArticleProps = {
    author: string,
    title: string,
    topNewsUrl: string,
    publishedAt: string,
}

export type rawTopNewsProps = {

    data: {
        status: string,
        totalResults: number,
        articles: ArticlesProps[]
    }

}