export class LandingPageSimpleRestClient {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
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

  getBaseUrl () {
    return this.baseUrl
  }

  transformJsonStringFormatToObject (jsonText) {
    return JSON.parse(jsonText)
  }

  getHttpRequestClient () {
    return new XMLHttpRequest()
  }

  sendSyncGetRequest (client, serviceUrl) {
    client.open('GET', serviceUrl, false)
    client.send(null)
  }

  getTextResponse (client) {
    return client.responseText
  }

  getResponse (client) {
    return this.transformJsonStringFormatToObject(this.getTextResponse(client))
  }
}
