import { expect } from 'chai'
import { describe, it } from 'mocha'

import { Address } from './address'

function testDefaults(instance) {
  expect(instance.city).to.equal('')
  expect(instance.state).to.equal('')
  expect(instance.street).to.equal('')
  expect(instance.zipCode).to.equal('')
  expect(instance.fullAddress).to.equal('')
}

describe('Address', function () {

  describe('constructor', function () {
    it('creates an instance', function () {
      const instance = new Address()
      expect(instance).to.exist
    })

    it('sets all the default values when given no input', function () {
      const instance = new Address()
      testDefaults(instance)
    })

    it('sets all the default values when given null', function () {
      const instance = new Address(null)
      testDefaults(instance)
    })

    it('sets all the default values when given an empty object', function () {
      const instance = new Address({})
      testDefaults(instance)
    })

    it('sets the values from the input to the corresponding model properties', function () {
      const obj = {
        city: 'test-city',
        state: 'test-state',
        street: 'test-street',
        zipCode: 'test-zipCode'
      }

      const instance = new Address(obj)
      for (let key of Object.keys(obj)) {
        expect(instance[key]).to.equal(obj[key])
      }
    })

    it('adds a field named fullAddress and sets the correct value', function () {
      const obj = {
        city: 'test-city',
        state: 'test-state',
        street: 'test-street',
        zipCode: 'test-zipCode'
      }

      const instance = new Address(obj)
      const expected = 'test-street test-city test-state test-zipCode'
      expect(instance.fullAddress).to.equal(expected)
    })

    it('creates a model with all of, and only, the expected fields', function () {
      const instance = new Address()
      const fields = [
        'city',
        'state',
        'street',
        'zipCode',
        'fullAddress'
      ]

      expect(Object.keys(instance)).to.have.same.members(fields)
    })
  })

  describe('getFullAddress()', function () {
    it('returns an empty string by default', function () {
      const instance = new Address()
      const result = instance.getFullAddress()
      const expected = ''
      expect(result).to.equal(expected)
    })

    it('returns the full address', function () {
      const obj = {
        city: 'test-city',
        state: 'test-state',
        street: 'test-street',
        zipCode: 'test-zipCode'
      }

      const instance = new Address(obj)
      const result = instance.getFullAddress()
      const expected = 'test-street test-city test-state test-zipCode'
      expect(result).to.equal(expected)
    })
  })
})
