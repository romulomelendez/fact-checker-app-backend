import puppeteer from 'puppeteer'

class Puppeteer {
    
    browser: any
    page: any

    constructor() {
        this.browser = this.openBrowser()
        this.page = this.createPage(this.browser)

        this.goToPage(process.env.GOOGLE_TRENDS_URL)
        this.setWindowSize()
    }

    async openBrowser() {
        return await puppeteer.launch()
    }

    async createPage(browser: any) {
        return await browser.newPage()
    }

    async goToPage(googleTrendsUrl: string | undefined) {
        await this.page.goto(googleTrendsUrl)
    }

    async setWindowSize() {
        await this.page.setViewport({width: 1080, height: 1024})
    }
}

export default new Puppeteer()
