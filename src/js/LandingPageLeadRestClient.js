import {SimpleRestClient} from './SimpleRestClient'

export class LandingPageLeadRestClient extends SimpleRestClient {
  constructor (baseUrl) {
    super(baseUrl)
    this.resource = '/landingpage/lead/'
  }

  createANewLead (lead) {
    let body = this.getRequestAsJsonString(lead)
    let client = this.getHttpRequestClient()
    this.sendSyncJsonPostRequest(client, this.getMainLeadServiceUrl(), body)
    return this.getResponse(client)
  }

  getMainLeadServiceUrl () {
    return this.baseUrl + this.resource
  }
}
