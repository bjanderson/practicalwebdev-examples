import { Address } from '../address/address.js'
import { Utils } from '../../utils/utils.js'

export class Person {
  constructor(obj) {
    obj = obj != null ? obj : {}
    this.address = new Address(obj.address)
    this.birthDate = Utils.date.isValidDate(obj.birthDate) ? new Date(obj.birthDate) : ''
    this.firstName = obj.firstName != null ? obj.firstName : ''
    this.friends = Utils.array.getArrayOfModels(Person, obj.friends)
    this.lastName = obj.lastName != null ? obj.lastName : ''
    this.petNames = Utils.array.getArray(obj.petNames)
    this.fullName = this.getFullName()
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`.trim()
  }
}
