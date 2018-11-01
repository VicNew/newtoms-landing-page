import {SimpleRestClient} from './SimpleRestClient'
import {RestClientException} from './RestClientException'

export class SimpleErrorHandlerRestClient extends SimpleRestClient {
  getResponse (client) {
    if (!this.responseStatusIsSuccess(client)) {
      this.throwRestClientException(client.status, client.statusText, this.getTextResponse(client))
    }
    return super.getResponse(client)
  }

  responseStatusIsSuccess (client) {
    return (this.getRequestStaus(client) === this.getSuccessStatus())
  }

  getRequestStaus (client) {
    return client.status
  }

  getSuccessStatus () {
    return 200
  }

  throwRestClientException (statusCode, statusText, description) {
    throw new RestClientException(statusCode, statusText, description)
  }
}
