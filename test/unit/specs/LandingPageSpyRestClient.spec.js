import {LandingPageSimpleRestClient} from '@/js/LandingPageSimpleRestClient'

export class LandingPageSpyRestClient extends LandingPageSimpleRestClient {
  constructor () {
    super('')
    this.templateConfigResponse = {
    "documentId":1,
    "documentType":"Whitepaper",
    "documentTitle":"Best practices for microservices",
    "documentDescription":"Today's business environment is extraordinarily competitive. No company – no matter its size or what industry it is in – is safe from disruption. To mitigate this risk, it's important to consider implementing microservices best practices in order to change quickly, innovate easily, and meet competition wherever it arises.",
    "documentUrl":"https://www.mulesoft.com/sites/default/files/resource-assets/wp_Best%20Practices%20for%20Microservices%20Whitepaper%20Research.pdf"
    }
  };

  static getLandingPageSpyRestClient() {
    var landingPageRestClient = new LandingPageSpyRestClient()
    spyOn(landingPageRestClient, 'getLandingPageTemplateConfigById').and.returnValue(landingPageRestClient.templateConfigResponse)
    return landingPageRestClient
  }
}

describe('LandingPageSpyRestClient', () => {
    var landingPageSpyRestClient = {}
    beforeEach (() => {
        landingPageSpyRestClient = new LandingPageSpyRestClient()
    })

    it('Given a LandingPageSpyRestClient class then create a new instance', () => {
        expect(landingPageSpyRestClient).not.toBe(null)
        expect(landingPageSpyRestClient instanceof Object).toBeTruthy()
        expect(landingPageSpyRestClient instanceof LandingPageSpyRestClient).toBeTruthy()
    })
})
