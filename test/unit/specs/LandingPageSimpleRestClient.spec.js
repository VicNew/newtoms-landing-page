import {LandingPageSimpleRestClient} from '@/js/LandingPageSimpleRestClient'
import {XMLHttpRequestMock} from './XMLHttpRequestMock.spec'

describe('Landing Page Simple Rest Client', () => {
    var restClient
    beforeEach (() => {
        restClient = getLandingPageSimpleRestClient('https://mocksvc.mulesoft.com/mocks/bd61be4a-c2b5-49ad-a910-33c7624b6afb', getMockedXMLHttpRequestMock())
    })

    it('Given a Landing Page Template Config Id when get configuration from service then return object', () => {
        var response = restClient.getLandingPageTemplateConfigById(1)
        expect(response).not.toBe(null)
        expect(response instanceof Object).toBeTruthy()
    })

    it('Given a Landing Page Template Config Id when get configuration from service then return the right configuration', () => {
        var response = restClient.getLandingPageTemplateConfigById(1)
        expect(response.documentId).toEqual(1)
        expect(response.documentType).toEqual('Whitepaper')
        expect(response.documentTitle).toEqual('Best practices for microservices')
        expect(response.documentDescription).toEqual('Today\'s business environment is extraordinarily competitive. No company – no matter its size or what industry it is in – is safe from disruption. To mitigate this risk, it\'s important to consider implementing microservices best practices in order to change quickly, innovate easily, and meet competition wherever it arises.')
        expect(response.documentUrl).toEqual('https://www.mulesoft.com/sites/default/files/resource-assets/wp_Best%20Practices%20for%20Microservices%20Whitepaper%20Research.pdf')
    })

    it('Given a Landing Page Template Config Id when get configuration from service then send request to server is called', () => {
        let restClientMocked = getSpyLandingPageSimpleRestClient('https://mocksvc.mulesoft.com/mocks/bd61be4a-c2b5-49ad-a910-33c7624b6afb')
        restClientMocked.getLandingPageTemplateConfigById(1)
        expect(restClientMocked.sendSyncGetRequest).toHaveBeenCalled()
    })

    it('Given a Landing Page Template Config Id when get configuration from service then send request to server with rigth client', () => {
        let restClientMocked = getSpyLandingPageSimpleRestClient('https://mocksvc.mulesoft.com/mocks/bd61be4a-c2b5-49ad-a910-33c7624b6afb')
        restClientMocked.getLandingPageTemplateConfigById(1)
        expect(spyClient).not.toBeNull()
        expect(spyClient instanceof XMLHttpRequest).toBeTruthy()
    })

    it('Given a Landing Page Template Config Id when get configuration from service then send request to the rigth service', () => {
        let restClientMocked = getSpyLandingPageSimpleRestClient('https://mocksvc.mulesoft.com/mocks/bd61be4a-c2b5-49ad-a910-33c7624b6afb')
        restClientMocked.getLandingPageTemplateConfigById(1)
        expect(spyServiceUrl).not.toBeNull()
        expect(spyServiceUrl).toEqual('https://mocksvc.mulesoft.com/mocks/bd61be4a-c2b5-49ad-a910-33c7624b6afb/landingpage/template/1')
    })

    it('Given a Landing Page Template Config Id when get configuration from service and the request was sending to the server then get the response', () => {
        let restClientMocked = getSpyLandingPageSimpleRestClient('https://mocksvc.mulesoft.com/mocks/bd61be4a-c2b5-49ad-a910-33c7624b6afb')
        restClientMocked.getLandingPageTemplateConfigById(1)
        expect(restClientMocked.getTextResponse).toHaveBeenCalled()
    })

    it('Given a Landing Page Template Config Id when get configuration from service and the request was sending to the server then get the response', () => {
        let restClientMocked = getSpyLandingPageSimpleRestClient('https://mocksvc.mulesoft.com/mocks/bd61be4a-c2b5-49ad-a910-33c7624b6afb')
        var response = restClientMocked.getLandingPageTemplateConfigById(1)
        expect(response.documentId).toEqual(1)
        expect(response.documentType).toEqual('Whitepaper')
        expect(response.documentTitle).toEqual('Best practices for microservices')
        expect(response.documentDescription).toEqual('Today\'s business environment is extraordinarily competitive. No company – no matter its size or what industry it is in – is safe from disruption. To mitigate this risk, it\'s important to consider implementing microservices best practices in order to change quickly, innovate easily, and meet competition wherever it arises.')
        expect(response.documentUrl).toEqual('https://www.mulesoft.com/sites/default/files/resource-assets/wp_Best%20Practices%20for%20Microservices%20Whitepaper%20Research.pdf')
    })

    xit('functional Test', () => {
        let realRestClient = new LandingPageSimpleRestClient('https://mocksvc.mulesoft.com/mocks/bd61be4a-c2b5-49ad-a910-33c7624b6afb')
        var response = realRestClient.getLandingPageTemplateConfigById(1)
        expect(response.documentId).toEqual(1)
        expect(response.documentType).toEqual('Whitepaper')
        expect(response.documentTitle).toEqual('Best practices for microservices')
        expect(response.documentDescription).toEqual('Today\'s business environment is extraordinarily competitive. No company – no matter its size or what industry it is in – is safe from disruption. To mitigate this risk, it\'s important to consider implementing microservices best practices in order to change quickly, innovate easily, and meet competition wherever it arises.')
        expect(response.documentUrl).toEqual('https://www.mulesoft.com/sites/default/files/resource-assets/wp_Best%20Practices%20for%20Microservices%20Whitepaper%20Research.pdf')
    })

})

let spyClient = ''
let spyServiceUrl = ''
let mockResponseJsonText = '   {  '  + 
'      "documentId":1,  '  + 
'      "documentType":"Whitepaper",  '  + 
'      "documentTitle":"Best practices for microservices",  '  + 
'      "documentDescription":"Today\'s business environment is extraordinarily competitive. No company – no matter its size or what industry it is in – is safe from disruption. To mitigate this risk, it\'s important to consider implementing microservices best practices in order to change quickly, innovate easily, and meet competition wherever it arises.",  '  + 
'      "documentUrl":"https://www.mulesoft.com/sites/default/files/resource-assets/wp_Best%20Practices%20for%20Microservices%20Whitepaper%20Research.pdf"  '  + 
'  }  '

function getMockedXMLHttpRequestMock () {
    var mockXMLHttpRequest = new XMLHttpRequestMock()
    mockXMLHttpRequest.responseText = mockResponseJsonText
    mockXMLHttpRequest.status = 200
    spyOn(mockXMLHttpRequest, 'open').and.callFake((method, serviceUrl, aSync) => {
    })
    spyOn(mockXMLHttpRequest, 'send').and.callFake((body) => {
    })
    return mockXMLHttpRequest
}

function getLandingPageSimpleRestClient(baseUrl, xmlHttpRequestMock) {
    let restClient = new LandingPageSimpleRestClient(baseUrl)
    spyOn(restClient, 'getHttpRequestClient').and.returnValue(xmlHttpRequestMock)
    return restClient
}

function getSpyLandingPageSimpleRestClient(baseUrl) {
    let restClientMocked = new LandingPageSimpleRestClient('https://mocksvc.mulesoft.com/mocks/bd61be4a-c2b5-49ad-a910-33c7624b6afb')
    spyOn(restClientMocked, 'sendSyncGetRequest').and.callFake(spySendSyncGetRequest)
    spyOn(restClientMocked, 'getTextResponse').and.returnValue(mockResponseJsonText)
    spyOn(restClientMocked, 'getRequestStaus').and.returnValue(200)
    return restClientMocked
}

function spySendSyncGetRequest(client, serviceUrl) {
    spyClient = client
    spyServiceUrl = serviceUrl
}
