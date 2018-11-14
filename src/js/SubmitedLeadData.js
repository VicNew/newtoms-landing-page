import {SimpleLeadData} from './SimpleLeadData'

export class SubmitedLeadData extends SimpleLeadData {
  constructor () {
    super()
    this.isSubmited = false
  }
}
