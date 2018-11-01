import {SimpleErrorHandlerRestClient} from './SimpleErrorHandlerRestClient'

export class LandingPageLeadRestClient extends SimpleErrorHandlerRestClient {
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

  getSuccessStatus () {
    return 201
  }
}
