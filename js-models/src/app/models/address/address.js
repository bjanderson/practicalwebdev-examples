export class Address {
  constructor(obj) {
    obj = obj != null ? obj : {}
    this.city = obj.city != null ? obj.city : ''
    this.state = obj.state != null ? obj.state : ''
    this.street = obj.street != null ? obj.street : ''
    this.zipCode = obj.zipCode != null ? obj.zipCode : ''
    this.fullAddress = this.getFullAddress()
  }

  getFullAddress() {
    return `${this.street} ${this.city} ${this.state} ${this.zipCode}`
  }
}
