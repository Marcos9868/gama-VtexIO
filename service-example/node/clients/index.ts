import { IOClients } from '@vtex/api'

import Status from './status'
export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('status', Status)
  }
}
