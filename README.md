<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-scramble/main/media/scramble.png" alt="Icon of ScRaMbLe" width="256" height="256">
  <h1>ScRaMbLe</h1>
</div>

<br>

<h4 align="center">
  🃏 Scrambles (rearranges randomly) Strings and Arrays. 🎋
</h4>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
  - [scrambleString()](#scramblestringinput-string-options-istringoptions-string)
  - [scrambleArray()](#scramblearrayarraytypeinput-arraytype-arraytype)
- [Examples](#️-examples)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- 🎯 Scrambles words while keeping first and last letters intact for readability
- 🧩 Shuffles array elements with a proven Fisher Yates algorithm
- ✂️ Optional whitespace trimming before scrambling text
- 🛡️ Validates inputs and throws clear, descriptive errors
- ⚡ Zero dependencies for lightweight, fast execution
- 🔄 Pure functions that don’t mutate original data
- 🧠 Works with any array type thanks to TypeScript generics
- 📝 Well-documented with clear parameter and return descriptions
- 🧪 Perfect for games, puzzles, mock data, and creative text effects

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/scramble
```

```bash
yarn add @igorskyflyer/scramble
```

```bash
npm i @igorskyflyer/scramble
```

<br>
<br>

## 🤹🏼 API

### `scrambleString(input: string, options?: IStringOptions): string`

*Scrambles the characters of each word in a given string.*  

`input` - The string to be scrambled.  

<br>

> ℹ️ **NOTE**
>
> Since `Fisher-Yates` algorithm is used for scrambling, a length of > 3 is needed for a word to be able to get scrambled.
>

<br>

`options` - Options for scrambling, **optional**.

<br>

`options` are defined via an interface `IStringOptions`:

```ts
interface IStringOptions {
  trimWhitespace?: boolean
}
```

<br>

`trimWhitespace`, if true all whitespace is removed from the input string prior to scrambling its contents.

<br>

Returns the scrambled string.  

Will throw an error if the input is not a string.

---

### `scrambleArray<ArrayType>(input: ArrayType[]): ArrayType[]`

*Scrambles the elements of an array.*  

`input` - The array to be scrambled.  

<br>

Returns the scrambled array.  

Will throw an error if the input is not an array.

<br>
<br>

## 🗒️ Examples

`example.mts`
```ts
import { scrambleString, scrambleArray } from '@igorskyflyer/scramble'

// these are just sample outputs
// since each invocation reorders
// elements randomly

console.log(scrambleString(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
)) // returns 'Leorm isupm dloor sit aetm, ccotnsueetr asdincipig eitl.'

console.log(scrambleString(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', { trimWhitespace: true }
)) // returns 'Lpetssgerodcsctcmuaunelrteiisoomirlait,toindmipe.'

console.log(scrambleArray([1, 2, 3, 4, 5, 6, 7, 8])) // [5, 7, 1, 4, 2, 8, 3, 6]

```

<br>
<br>

## 📝 Changelog

📑 The changelog is available here, [CHANGELOG.md](https://github.com/igorskyflyer/npm-scramble/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-scramble/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[@igorskyflyer/uarray](https://www.npmjs.com/package/@igorskyflyer/uarray)

> _🎉 Provides UArray, an Array type that supports negative indices/indexes, just wrap your regular JavaScript array with UArray() and you are all set! 🙌_

<br>

[@igorskyflyer/magic-string](https://www.npmjs.com/package/@igorskyflyer/magic-string)

> _🧵 An expressive and chainable library for advanced string manipulations. Supports appending, prepending, trimming, quoting, and path formatting with customizable whitespace handling. Makes advanced String manipulations a piece of cake. 🦥_

<br>

[@igorskyflyer/strip-html](https://www.npmjs.com/package/@igorskyflyer/strip-html)

> _🥞 Removes HTML code from the given string. Can even extract text-only from the given an HTML string. ✨_

<br>

[@igorskyflyer/extendable-string](https://www.npmjs.com/package/@igorskyflyer/extendable-string)

> _🦀 ExtendableString allows you to create strings on steroids that have custom transformations applied to them, unlike common, plain strings. 🪀_

<br>

[@igorskyflyer/duoscribi](https://www.npmjs.com/package/@igorskyflyer/duoscribi)

> _✒ DúöScríbî allows you to convert letters with diacritics to regular letters. 🤓_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
