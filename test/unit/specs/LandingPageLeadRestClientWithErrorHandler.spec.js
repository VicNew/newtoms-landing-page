import {LandingPageLeadRestClient} from '@/js/LandingPageLeadRestClient'
import {SimpleErrorHandlerRestClient} from '@/js/SimpleErrorHandlerRestClient'
import {SimpleLeadData} from '@/js/SimpleLeadData'
import {XMLHttpRequestMock} from './XMLHttpRequestMock.spec'
import {RestClientException} from '@/js/RestClientException'

describe('Landing Page Lead Rest Client Test', () => {
    var landingPageLeadRestClient = {}
    var mockXMLHttpRequest = {}
    beforeEach (() => {
        mockXMLHttpRequest = getMockedXMLHttpRequestMock(mockResponseJsonText)
        mockXMLHttpRequest.status = 200
        landingPageLeadRestClient = getLandingPageLeadRestClient(baseUrl, mockXMLHttpRequest)
    })

    it('Given a LandingPageLeadRestClient class then create a new instance', () => {
        expect(landingPageLeadRestClient).not.toBe(null)
        expect(landingPageLeadRestClient instanceof Object).toBeTruthy()
        expect(landingPageLeadRestClient instanceof SimpleErrorHandlerRestClient).toBeTruthy()
        expect(landingPageLeadRestClient instanceof LandingPageLeadRestClient).toBeTruthy()
    })

    it('Given a Simple Lead Data when create A new lead then return a valid response', () => {
        let response = landingPageLeadRestClient.createANewLead(getDefaultLeadData())
        expect(response.id).toEqual(1)
        expect(response.firstName).toEqual('Victor')
        expect(response.lastName).toEqual('Luna')
        expect(response.company).toEqual('Newtoms')
        expect(response.title).toEqual('Developer')
        expect(response.email).toEqual('victor.luna@newtoms.com')
        expect(response.status).toEqual('Created')
    })

    it('Given a Landing Page Template Config Id when get configuration from service and something fail then throw an error', () => {
        try {
            let realRestClient = new LandingPageLeadRestClient('https://mocksvc.mulesoft.com/mocks/invalid')
            realRestClient.createANewLead(getDefaultLeadData())
        } catch (error) {
            expect(error).not.toBeNull()
            expect(error instanceof RestClientException).toBeTruthy()
        }
    })

    it('Given a Landing Page Template Config Id when get configuration from service with invalid base url then throw a not found error', () => {
        try {
            let realRestClient = new LandingPageLeadRestClient('https://mocksvc.mulesoft.com/mocks/invalid')
            realRestClient.createANewLead(getDefaultLeadData())
        } catch (error) {
            expect(error.statusCode).toEqual(404)
            expect(error.statusText).toEqual('Not Found')
            expect(error.description).toEqual('')
        }
    })

    xit('Functional - Given a Simple Lead Data when create A new lead then return a valid response', () => {
        let realRestClient = new LandingPageLeadRestClient('https://mocksvc.mulesoft.com/mocks/bd61be4a-c2b5-49ad-a910-33c7624b6afb')
        let lead = getDefaultLeadData()
        let response = realRestClient.createANewLead(lead)
        expect(response.id).toEqual(1)
        expect(response.firstName).toEqual('Victor')
        expect(response.lastName).toEqual('Luna')
        expect(response.company).toEqual('Newtoms')
        expect(response.title).toEqual('Developer')
        expect(response.email).toEqual('victor.luna@newtoms.com')
        expect(response.status).toEqual('Created')
    })
})

let baseUrl = 'https://mocksvc.mulesoft.com/mocks/bd61be4a-c2b5-49ad-a910-33c7624b6afb'
let mockResponseJsonText =  '   {  '  + 
'       "id": 1,  '  + 
'       "firstName": "Victor",  '  + 
'       "lastName": "Luna",  '  + 
'       "company": "Newtoms",  '  + 
'       "title": "Developer",  '  + 
'       "email": "victor.luna@newtoms.com",  '  + 
'       "status": "Created",  '  + 
'       "links": [  '  + 
'           {  '  + 
'               "rel": "/linkrels/lead/info",  '  + 
'               "uri": "/landingpage/lead/1234",  '  + 
'               "method": "GET"  '  + 
'           },  '  + 
'           {  '  + 
'               "rel": "/linkrels/lead/updateInfo",  '  + 
'               "uri": "/landingpage/lead/1234",  '  + 
'               "method": "PUT"  '  + 
'           },  '  + 
'           {  '  + 
'               "rel": "/linkrels/lead/delete",  '  + 
'               "uri": "/landingpage/lead/1234",  '  + 
'               "method": "DELETE"  '  + 
'           }  '  + 
'       ]  '  + 
'  }  ' ; 

function getMockedXMLHttpRequestMock (mockResponseJsonText) {
    var mockXMLHttpRequest = new XMLHttpRequestMock()
    mockXMLHttpRequest.responseText = mockResponseJsonText
    spyOn(mockXMLHttpRequest, 'open').and.callFake((method, serviceUrl, aSync) => {
    })
    spyOn(mockXMLHttpRequest, 'send').and.callFake((body) => {
    })
    spyOn(mockXMLHttpRequest, 'setRequestHeader').and.callFake((header, value) => {
    })
    return mockXMLHttpRequest
}

function getLandingPageLeadRestClient (baseUrl, xmlHttpRequestMock) {
    let restClient = new LandingPageLeadRestClient(baseUrl)
    spyOn(restClient, 'getHttpRequestClient').and.returnValue(xmlHttpRequestMock)
    return restClient
}

function getDefaultLeadData () {
    let lead = new SimpleLeadData()
    lead.firstName = 'Victor'
    lead.lastName = 'Luna'
    lead.company = 'Newtoms'
    lead.title = 'Developer'
    lead.email = 'victor.luna@newtoms.com'
    return lead
}
