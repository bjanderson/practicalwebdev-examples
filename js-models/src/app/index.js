import { Person } from './models/person/person.js'

let person = new Person({friends: [{firstName: 'fred'}]})
console.log('person: ', person)
