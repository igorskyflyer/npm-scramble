// Author: Igor Dimitrijević (@igorskyflyer)

/**
 * @description Options for scrambling strings.
 * @property trimSpaces - If true, spaces are removed before scrambling.
 */
interface IStringOptions {
  trimSpaces?: boolean
}

function scrambleWord(word: string): string {
  if (word.length <= 3) {
    return word
  }

  const middle: string[] = word.slice(1, -1).split('')
  const middleLength: number = middle.length

  for (let i = middleLength - 1; i > 0; i--) {
    const j: number = Math.floor(Math.random() * (i + 1))
    const temp: string = middle[i]
    middle[i] = middle[j]
    middle[j] = temp
  }

  return word.at(0) + middle.join('') + word.at(-1)
}

/**
 * Scrambles the characters of each word in a given string.
 *
 * @param input - The string to be scrambled.
 * @param options - Options for scrambling.
 * @returns The scrambled string.
 * @throws Will throw an error if the input is not a string.
 */
export function scrambleString(
  input: string,
  options: IStringOptions = { trimSpaces: false }
): string {
  if (typeof input !== 'string') {
    throw new Error('No valid value passed for scrambling.')
  }

  let value: string = input

  if (options.trimSpaces === true) {
    value = value.replace(/\s*/gm, '')
  }

  return value.split(' ').map(scrambleWord).join(' ')
}

/**
 * Scrambles the elements of an array.
 *
 * @template ArrayType
 * @param input - The array to be scrambled.
 * @returns The scrambled array.
 * @throws Will throw an error if the input is not an array.
 */
export function scrambleArray<ArrayType>(input: ArrayType[]): ArrayType[] {
  if (!Array.isArray(input)) {
    throw new Error('No valid array passed for scrambling.')
  }

  const copy: ArrayType[] = input.slice()
  const count: number = copy.length

  if (count === 0) {
    return []
  }

  for (let i = count - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp: ArrayType = copy[i]
    copy[i] = copy[j]
    copy[j] = temp
  }

  return copy
}
