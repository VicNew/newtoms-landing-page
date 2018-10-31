export class RestClientException {
  constructor (statusCode, statusText, description) {
    this.statusCode = statusCode
    this.statusText = statusText
    this.description = description
  }
}
