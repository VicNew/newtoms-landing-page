import {SimpleRestClient} from './SimpleRestClient'

export class LandingPageSimpleRestClient extends SimpleRestClient {
  constructor (baseUrl) {
    super(baseUrl)
    this.resource = '/landingpage/template/'
  }

  getLandingPageTemplateConfigById (id) {
    var requestClient = this.getHttpRequestClient()
    this.sendSyncGetRequest(requestClient, this.getCompleteServiceUrl(this.resource + id))
    return this.getResponse(requestClient)
  }

  getCompleteServiceUrl (resourcePath) {
    return this.getBaseUrl() + resourcePath
  }
}
