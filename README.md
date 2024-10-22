<h1 align="center">ScRaMbLe</h1>

<br>

<div align="center">
  🃏 Scrambles (rearranges randomly) Strings and Arrays. 🎋
</div>

<br>
<br>

<div align="center">
  <blockquote>
    <br>
    <h4>💖 Support further development</h4>
    <span>I work hard for every project, including this one
    <br>
    and your support means a lot to me!
    <br>
    <br>
    Consider buying me a coffee. ☕
    <br>
    <strong>Thank you for supporting my efforts! 🙏😊</strong></span>
    <br>
    <br>
    <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
    <br>
    <br>
    <a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
    <br>
    <br>
    <br>
  </blockquote>
</div>

<br>
<br>

## 📃 Table of contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
  - [scrambleString()](#scramblestringinput-string-options-istringoptions-string)
  - [scrambleArray()](#scramblearrayarraytypeinput-arraytype-arraytype)
- [Examples](#-examples)
- [Changelog](#-changelog)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

---

## 🤖 Features

- 🫎 reorders elements randomly
- 🐔 works for strings and arrays
- 🐲 uses `Fisher-Yates` algorithm

<br>

## 🕵🏼 Usage

Install it by executing:

```shell
npm i '@igor.dvlpr/scramble'
```

---

## 🤹🏼 API

### `scrambleString(input: string, options?: IStringOptions): string`

*Scrambles the characters of each word in a given string.*  

`input` - The string to be scrambled.  

<br>

> [!NOTE]
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

---

## ✨ Examples

`example.mts`
```ts
import { scrambleString, scrambleArray } from '@igor.dvlpr/scramble'

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

---

## 📝 Changelog

📑 The changelog is available here: [CHANGELOG.md](https://github.com/igorskyflyer/npm-scramble/blob/main/CHANGELOG.md).

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-scramble/blob/main/LICENSE).

---

## 🧬 Related

[@igor.dvlpr/uarray](https://www.npmjs.com/package/@igor.dvlpr/uarray)

> _🎉 Provides UArray, an Array type that supports negative indices/indexes, just wrap your regular JavaScript array with UArray() and you are all set! 🙌_

<br>

[@igor.dvlpr/magic-string](https://www.npmjs.com/package/@igor.dvlpr/magic-string)

> _🧵 An expressive and chainable library for advanced string manipulations. Supports appending, prepending, trimming, quoting, and path formatting with customizable whitespace handling. Makes advanced String manipulations a piece of cake. 🦥_

<br>

[@igor.dvlpr/strip-html](https://www.npmjs.com/package/@igor.dvlpr/strip-html)

> _🥞 Removes HTML code from the given string. Can even extract text-only from the given an HTML string. ✨_

<br>

[@igor.dvlpr/extendable-string](https://www.npmjs.com/package/@igor.dvlpr/extendable-string)

> _🦀 ExtendableString allows you to create strings on steroids that have custom transformations applied to them, unlike common, plain strings. 🪀_

<br>

[@igor.dvlpr/duoscribi](https://www.npmjs.com/package/@igor.dvlpr/duoscribi)

> _✒ DúöScríbî allows you to convert letters with diacritics to regular letters. 🤓_

---

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
