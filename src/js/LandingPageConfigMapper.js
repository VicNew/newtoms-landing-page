import {LandingPageConfig} from './LandingPageConfig'

export class LandingPageConfigMapper {
  transformTemplateConfigResponse (response) {
    var pageConfig = new LandingPageConfig()
    pageConfig.documentId = response.documentId
    pageConfig.documentType = response.documentType
    pageConfig.documentTitle = response.documentTitle
    pageConfig.documentDescription = response.documentDescription
    pageConfig.documentUrl = response.documentUrl
    return pageConfig
  }
}
