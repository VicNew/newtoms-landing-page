export class XMLHttpRequestMock {
    constructor () {
        this.responseText
        this.status = 200
    }

    open (method, serviceUrl, aSync) {

    }
    
    send (body) {

    }

    setRequestHeader (header, value) {

    }
}

describe('XMLHttpRequestMock', () => {
    var xmlHttpRequestMock = {}
    beforeEach (() => {
        xmlHttpRequestMock = new XMLHttpRequestMock()
    })

    it('Given a XMLHttpRequestMock class then create a new instance', () => {
        expect(xmlHttpRequestMock).not.toBe(null)
        expect(xmlHttpRequestMock instanceof Object).toBeTruthy()
        expect(xmlHttpRequestMock instanceof XMLHttpRequestMock).toBeTruthy()
    })
})