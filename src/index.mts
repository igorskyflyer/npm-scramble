// Author: Igor Dimitrijević (@igorskyflyer)

interface IStringOptions {
  ignoreSpaces?: boolean
}

function scrambleWord(word: string) {
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

export function scrambleString(
  input: string,
  options: IStringOptions = { ignoreSpaces: false }
) {
  let value: string = input

  if (options.ignoreSpaces === true) {
    value = value.replace(/\s*/gm, '')
  }

  return value.split(' ').map(scrambleWord).join(' ')
}

export function scrambleArray<ArrayType>(array: ArrayType[]): ArrayType[] {
  const copy: ArrayType[] = array.slice()
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
