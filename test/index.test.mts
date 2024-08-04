// Author: Igor Dimitrijević (@igorskyflyer)

import { describe, expect, it, suite } from 'vitest'
import { scrambleArray, scrambleString } from '../src/index.mts'

describe('🧪 ScRaMbLe tests 🧪', () => {
  suite('scrambleString()', () => {
    it('should throw', () => {
      // @ts-expect-error
      expect(() => scrambleString()).toThrowError()
    })

    it('should return the original string', () => {
      expect(scrambleString('he he')).toBe('he he')
    })

    it('should return a scrambled string (with spaces)', () => {
      expect(
        scrambleString(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        )
      ).not.toBe('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
    })

    it('should return a scrambled string (without spaces)', () => {
      expect(
        scrambleString(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          { trimWhitespace: true }
        )
      ).not.toBe('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
    })
  })

  suite('scrambleArray()', () => {
    it('should throw', () => {
      // @ts-expect-error
      expect(() => scrambleArray()).toThrowError()
    })

    it('should return the original array', () => {
      expect(scrambleArray([])).length(0)
    })

    it('should return a scrambled string array', () => {
      const input: string[] = [
        'Lorem',
        'ipsum',
        'dolor',
        'sit',
        'amet,',
        ',consectetur',
        'adipiscing',
        'elit.'
      ]

      expect(scrambleArray(input)).not.toBe(input)
    })

    it('should return a scrambled number array', () => {
      const input: number[] = [1, 2, 3, 4, 5, 6, 7, 8]
      expect(scrambleArray(input)).not.toBe(input)
    })
  })
})
