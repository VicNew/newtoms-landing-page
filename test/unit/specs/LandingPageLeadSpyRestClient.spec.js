import {LandingPageLeadRestClient} from '@/js/LandingPageLeadRestClient'

export class LandingPageLeadSpyRestClient extends LandingPageLeadRestClient {
  constructor () {
    super('')
    this.createdLeadResponse = {
      "id":1,
      "firstName":"Victor",
      "lastName":"Luna",
      "company":"Newtoms",
      "title":"Developer",
      "email":"victor.luna@newtoms.com",
      "status":"Created",
      "links":[
      {
        "rel":"/linkrels/lead/info",
        "uri":"/landingpage/lead/1234",
        "method":"GET"
      },
      {
        "rel":"/linkrels/lead/updateInfo",
        "uri":"/landingpage/lead/1234",
        "method":"PUT"
      },
      {
        "rel":"/linkrels/lead/delete",
        "uri":"/landingpage/lead/1234",
        "method":"DELETE"
      }
    ]
    }
  }

  static getLandingPageLeadSpyRestClient() {
    var landingPageLeadRestClient = new LandingPageLeadSpyRestClient()
    spyOn(landingPageLeadRestClient, 'createANewLead').and.returnValue(landingPageLeadRestClient.createdLeadResponse)
    return landingPageLeadRestClient
  }

}

describe('LandingPageLeadSpyRestClient', () => {
    var landingPageLeadSpyRestClient = {}
    beforeEach (() => {
        landingPageLeadSpyRestClient = new LandingPageLeadSpyRestClient()
    })

    it('Given a LandingPageLeadSpyRestClient class then create a new instance', () => {
        expect(landingPageLeadSpyRestClient).not.toBe(null)
        expect(landingPageLeadSpyRestClient instanceof Object).toBeTruthy()
        expect(landingPageLeadSpyRestClient instanceof LandingPageLeadSpyRestClient).toBeTruthy()
    })
})