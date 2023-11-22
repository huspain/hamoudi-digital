export class PortfolioItem {
    websiteName: String;
    websiteImg: String;
    websiteUrl: String;
    tech: String[];

    constructor(webName: String, webImg: String, webUrl: String, tech: String[]) {
        this.websiteName = webName;
        this.websiteImg = webImg;
        this.websiteUrl = webUrl;
        this.tech = tech;
    }
}
