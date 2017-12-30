import { expect } from 'chai'
import { describe, it } from 'mocha'

import { Address } from '../address/address'

import { Person } from './person'

function testDefaults(instance) {
  expect(instance.address).to.deep.equal(new Address())
  expect(instance.birthDate).to.equal('')
  expect(instance.firstName).to.equal('')
  expect(instance.friends).to.deep.equal([])
  expect(instance.lastName).to.equal('')
  expect(instance.petNames).to.deep.equal([])
  expect(instance.fullName).to.equal('')
}

describe('Person', function () {

  describe('constructor', function () {
    it('creates an instance', function () {
      const instance = new Person()
      expect(instance).to.exist
    })

    it('sets all the default values when given no input', function () {
      const instance = new Person()
      testDefaults(instance)
    })

    it('sets all the default values when given null', function () {
      const instance = new Person(null)
      testDefaults(instance)
    })

    it('sets all the default values when given an empty object', function () {
      const instance = new Person({})
      testDefaults(instance)
    })

    it('sets the values from the input to the corresponding model properties', function () {
      const obj = {
        address: {city: 'test-city'},
        birthDate: '1/1/2001',
        firstName: 'test-firstName',
        friends: [{firstName: 'test-friend'}],
        lastName: 'test-lastName',
        petNames: ['test-pet']
      }

      const expected = {
        address: new Address(obj.address),
        birthDate: new Date(obj.birthDate),
        firstName: obj.firstName,
        friends: [new Person(obj.friends[0])],
        lastName: obj.lastName,
        petNames: obj.petNames,
      }

      const instance = new Person(obj)
      for (let key of Object.keys(obj)) {
        expect(instance[key]).to.deep.equal(expected[key])
      }
    })

    it('adds a field named fullName and sets the correct value', function () {
      const obj = {
        firstName: 'test-firstName',
        lastName: 'test-lastName'
      }

      const instance = new Person(obj)
      const expected = 'test-firstName test-lastName'
      expect(instance.fullName).to.equal(expected)
    })

    it('creates an array of friends when given a single object', function () {
      const friend = {firstName: 'test-friend'}
      const instance = new Person({friends: friend})
      const expected = [new Person(friend)]
      expect(instance.friends).to.deep.equal(expected)
    })

    it('creates an array of petNames when given a single string', function () {
      const petName = 'test-pet'
      const instance = new Person({petNames: petName})
      const expected = [petName]
      expect(instance.petNames).to.deep.equal(expected)
    })

    it('creates a model with all of, and only, the expected fields', function () {
      const instance = new Person()
      const fields = [
        'address',
        'birthDate',
        'firstName',
        'friends',
        'lastName',
        'petNames',
        'fullName'
      ]

      expect(Object.keys(instance)).to.have.same.members(fields)
    })
  })

  describe('getFullName()', function () {
    it('returns an empty string by default', function () {
      let instance = new Person()
      const result = instance.getFullName()
      const expected = ''
      expect(result).to.equal(expected)
    })

    it('returns the fullName', function () {
      const obj = {
        firstName: 'test-firstName',
        lastName: 'test-lastName'
      }

      const instance = new Person(obj)
      const result = instance.getFullName()
      const expected = 'test-firstName test-lastName'
      expect(result).to.equal(expected)
    })
  })
})
