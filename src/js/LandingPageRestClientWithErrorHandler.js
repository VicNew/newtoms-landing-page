import {LandingPageSimpleRestClient} from './LandingPageSimpleRestClient'
import {RestClientException} from './RestClientException'

export class LandingPageRestClientWithErrorHandler extends LandingPageSimpleRestClient {
  getResponse (client) {
    if (!this.responseStatusIsSuccess(client)) {
      this.throwRestClientException(client.status, client.statusText, this.getTextResponse(client))
    }
    return super.getResponse(client)
  }

  responseStatusIsSuccess (client) {
    return (this.getRequestStaus(client) === 200)
  }

  getRequestStaus (client) {
    return client.status
  }

  throwRestClientException (statusCode, statusText, description) {
    throw new RestClientException(statusCode, statusText, description)
  }
}
