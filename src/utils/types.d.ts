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