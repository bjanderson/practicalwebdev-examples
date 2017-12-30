import { expect } from 'chai'
import { describe, it } from 'mocha'

import { Address } from '../../models/address/address'

import { ArrayUtils } from './array-utils'

describe('ArrayUtils', function () {

  describe('getArray(objs)', function () {
    it('returns an empty array when objs is undefined', function () {
      const result = ArrayUtils.getArray()
      const expected = []
      expect(result).to.deep.equal(expected)
    })

    it('returns an empty array when objs is null', function () {
      const objs = null
      const result = ArrayUtils.getArray(objs)
      const expected = []
      expect(result).to.deep.equal(expected)
    })

    it('returns an array of strings objs is a string', function () {
      const objs = 'test'
      const result = ArrayUtils.getArray(objs)
      const expected = ['test']
      expect(result).to.deep.equal(expected)
    })

    it('returns objs when it is an array', function () {
      const objs = ['test']
      const result = ArrayUtils.getArray(objs)
      const expected = ['test']
      expect(result).to.deep.equal(expected)
    })
  })

  describe('getArrayOfModels(clazz, objs)', function () {
    it('returns an empty array when objs is undefined', function () {
      const result = ArrayUtils.getArrayOfModels(Address)
      const expected = []
      expect(result).to.deep.equal(expected)
    })

    it('returns an empty array when objs is null', function () {
      const objs = null
      const result = ArrayUtils.getArrayOfModels(Address, objs)
      const expected = []
      expect(result).to.deep.equal(expected)
    })

    it('returns an array of models when objs is a single model', function () {
      const objs = new Address()
      const result = ArrayUtils.getArrayOfModels(Address, objs)
      const expected = [new Address()]
      expect(result).to.deep.equal(expected)
    })

    it('returns an array of models when objs is an array of models', function () {
      const objs = [new Address()]
      const result = ArrayUtils.getArrayOfModels(Address, objs)
      const expected = [new Address()]
      expect(result).to.deep.equal(expected)
    })

    it('returns an empty array when objs is not of the given model type', function () {
      const objs = [{test: 'test'}]
      const result = ArrayUtils.getArrayOfModels(Address, objs)
      const expected = []
      expect(result).to.deep.equal(expected)
    })
  })
})
