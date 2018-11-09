import {SimpleLeadData} from '@/js/SimpleLeadData'

describe('XMLHttpRequest Test', () => {
  var originalTimeout;
  beforeEach(() => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    //jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
  })
  
  xit('', (done) => {
      var body = {
        "firstName":"Victor",
        "lastName":"Luna",
        "company":"Newtoms",
        "title":"Developer",
        "email":"victor.luna@newtoms.com"
     }
     let lead = new SimpleLeadData()
     lead.firstName = 'Victor'
     lead.lastName = 'Luna'
     lead.company = 'Newtoms'
     lead.title = 'Developer'
     lead.email = 'victor.luna@newtoms.com'
      var client = new XMLHttpRequest()
      /*client.onreadystatechange = function () {
        expect(client.responseText).toEqual('algo')
        done()
      }*/
      //client.open('GET', 'https://newtoms-landingpage-process-api.us-e1.cloudhub.io/api/landingpage/template/1', false)
      client.open('POST', 'https://newtoms-landingpage-process-api.us-e1.cloudhub.io/api/landingpage/lead/', false)
      client.setRequestHeader('Content-Type', 'application/json')
      //client.open('GET', 'https://mocksvc.mulesoft.com/mocks/bd61be4a-c2b5-49ad-a910-33c7624b6afb/landingpage/template/1', true)
      //client.withCredentials = true
      //client.setRequestHeader('Access-Control-Allow-Origin', '*')
      //client.setRequestHeader('Access-Control-Allow-Credentials', 'true')
      //client.setRequestHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With')
      //client.setRequestHeader('X-Request-Method', 'GET')
      //client.setRequestHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE')
      //client.send()
      client.send(JSON.stringify(lead))
      expect(JSON.parse(client.responseText)).toEqual('algo')
      done()
      
      //var mystatus = ''
      //var $ = require('jquery')
      /*$.ajax({
          dataType: 'json',
          url: 'https://newtoms-landingpage-process-api.us-e1.cloudhub.io/api/landingpage/template/1',
          method: 'GET',
          headers: {
            'Access-Control-Allow-Origin': 'http://localhost',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
          },
          crossDomain: false,
          success: function (data) {
            mystatus = 'success'
            expect(JSON.stringify(data)).toEqual('success')
            done()
          },
          error: function (data) {
            mystatus = 'error'
            expect(JSON.stringify(data)).toEqual('error')
            done()
          }
      })*/
      /*$.ajax({
        url: 'https://newtoms-landingpage-process-api.us-e1.cloudhub.io/api/landingpage/template/1',
        async: false,
        success: function (data) {
          mystatus = 'success'
          expect(JSON.stringify(data)).toEqual('success')
          done()
        },
        error: function (data) {
          mystatus = 'error'
          expect(JSON.stringify(data)).toEqual('error')
          done()
        }
      })*/
      //expect(JSON.stringify(mystatus)).toEqual('algo')
  })

  afterEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout
  })
})