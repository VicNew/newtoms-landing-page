export class SimpleRestClient {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
  }

  getBaseUrl () {
    return this.baseUrl
  }

  getHttpRequestClient () {
    return new XMLHttpRequest()
  }

  sendSyncJsonPostRequest (client, serviceUrl, body) {
    client.open('POST', serviceUrl, false)
    client.setRequestHeader('Content-Type', 'application/json')
    client.send(body)
  }

  sendSyncGetRequest (client, serviceUrl) {
    client.open('GET', serviceUrl, false)
    client.send()
  }

  getRequestAsJsonString (objectToTransform) {
    return JSON.stringify(objectToTransform)
  }

  getTextResponse (client) {
    return client.responseText
  }

  transformJsonStringFormatToObject (jsonText) {
    return JSON.parse(jsonText)
  }

  getResponse (client) {
    return this.transformJsonStringFormatToObject(this.getTextResponse(client))
  }
}
