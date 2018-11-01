import {LandingPageLeadRestClient} from '@/js/LandingPageLeadRestClient'
import {SimpleRestClient} from '@/js/SimpleRestClient'
import {SimpleLeadData} from '@/js/SimpleLeadData'
import {XMLHttpRequestMock} from './XMLHttpRequestMock.spec'

describe('Landing Page Lead Rest Client Test', () => {
    var landingPageLeadRestClient = {}
    var mockXMLHttpRequest = {}
    beforeEach (() => {
        mockXMLHttpRequest = getMockedXMLHttpRequestMock(mockResponseJsonText)
        mockXMLHttpRequest.status = 201
        landingPageLeadRestClient = getLandingPageLeadRestClient(baseUrl, mockXMLHttpRequest)
    })

    it('Given a LandingPageLeadRestClient class then create a new instance', () => {
        expect(landingPageLeadRestClient).not.toBe(null)
        expect(landingPageLeadRestClient instanceof Object).toBeTruthy()
        expect(landingPageLeadRestClient instanceof SimpleRestClient).toBeTruthy()
        expect(landingPageLeadRestClient instanceof LandingPageLeadRestClient).toBeTruthy()
    })

    it('Given a LandingPageLeadRestClient class when create a new instance then it has a base url', () => {
        expect(landingPageLeadRestClient.baseUrl).toBe('https://mocksvc.mulesoft.com/mocks/bd61be4a-c2b5-49ad-a910-33c7624b6afb')
    })

    it('Given a LandingPageLeadRestClient class when create a new instance then it has a base url', () => {
        expect(landingPageLeadRestClient.resource).toBe('/landingpage/lead/')
    })

    it('Given a Simple Lead Data when create A new lead then return a response', () => {
        let response = landingPageLeadRestClient.createANewLead(getDefaultLeadData())
        expect(response).not.toBe(null)
        expect(response instanceof Object).toBeTruthy()
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

    it('Given a Simple Lead Data when create A new lead then transform lead data to a valid Json string format', () => {
        spyOn(landingPageLeadRestClient, 'getRequestAsJsonString')
        let lead = getDefaultLeadData()
        landingPageLeadRestClient.createANewLead(lead)
        expect(landingPageLeadRestClient.getRequestAsJsonString).toHaveBeenCalled()
        expect(landingPageLeadRestClient.getRequestAsJsonString).toHaveBeenCalledWith(lead)
    })

    it('Given a Simple Lead Data when create A new lead then get the right rest client', () => {
        landingPageLeadRestClient.createANewLead(getDefaultLeadData())
        expect(landingPageLeadRestClient.getHttpRequestClient).toHaveBeenCalled()
    })

    it('Given a Simple Lead Data when create A new lead then get the right service url', () => {
        spyOn(landingPageLeadRestClient, 'getMainLeadServiceUrl')
        landingPageLeadRestClient.createANewLead(getDefaultLeadData())
        expect(landingPageLeadRestClient.getMainLeadServiceUrl).toHaveBeenCalled()
    })

    it('Given a Simple Lead Data when create A new lead then send the right request data', () => {
        spyOn(landingPageLeadRestClient, 'sendSyncJsonPostRequest')
        let lead = getDefaultLeadData()
        landingPageLeadRestClient.createANewLead(lead)
        expect(landingPageLeadRestClient.sendSyncJsonPostRequest).toHaveBeenCalled()
        expect(landingPageLeadRestClient.sendSyncJsonPostRequest).toHaveBeenCalledWith(mockXMLHttpRequest,baseUrl + '/landingpage/lead/', JSON.stringify(lead))
    })

    it('Given a Simple Lead Data when create A new lead then get the response', () => {
        spyOn(landingPageLeadRestClient, 'getResponse')
        landingPageLeadRestClient.createANewLead(getDefaultLeadData())
        expect(landingPageLeadRestClient.getResponse).toHaveBeenCalled()
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
