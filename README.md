# hex2pantone

convert hex colors to pantone colors because sometimes you need to know what that hex actually looks like in print

made by [@alexgabe-dev](https://github.com/alexgabe-dev) - i like colors and making things work

[![npm version](https://badge.fury.io/js/hex2pantone.svg)](https://badge.fury.io/js/hex2pantone)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## what it does

- 🎨 turns your hex colors into pantone colors (the closest match anyway)
- 📊 i collected like 47 pantone colors that seemed useful
- 🔍 you can search through them by color name or just type "red" or "blue"
- 📏 shows you how close the match actually is
- 🎯 typescript definitions included (because why not)
- 🧪 i wrote tests for it so it probably works
- 📱 works in node.js and browsers

## install

```bash
npm install hex2pantone
```

## quick start

```javascript
const { hex2pantone } = require('hex2pantone');

// just give it a hex color and it'll find the closest pantone
const result = hex2pantone('#FF5733');
console.log(result.match.name); // "Pantone 17-1463 TPX"
console.log(result.match.hex);  // "#FF8C00"
```

## api stuff

### `hex2pantone(hexColor, options?)`

finds the closest pantone color to your hex

**what you give it:**
- `hexColor` (string): hex color like '#FF5733' or 'FF5733'
- `options` (object, optional):
  - `includeDistance` (boolean): show how close the match is
  - `maxDistance` (number): only return matches within this distance

**what you get back:**
```javascript
{
  match: {
    name: "Pantone 17-1463 TPX",
    code: "PANTONE 17-1463 TPX", 
    hex: "#FF8C00",
    rgb: [255, 140, 0]
  },
  inputHex: "#FF5733",
  inputRgb: [255, 87, 51],
  distance: 45.2 // only if you asked for it
}
```

### `getAllPantoneColors()`

gets all the pantone colors i have

```javascript
const { getAllPantoneColors } = require('hex2pantone');
const colors = getAllPantoneColors();
console.log(colors.length); // 47
```

### `searchPantoneColors(query)`

search through my pantone colors

```javascript
const { searchPantoneColors } = require('hex2pantone');
const redColors = searchPantoneColors('red');
console.log(redColors); // array of red pantone colors
```

### `hexToRgb(hex)`

turns hex into rgb (helper function)

```javascript
const { hexToRgb } = require('hex2pantone');
const rgb = hexToRgb('#FF5733');
console.log(rgb); // [255, 87, 51]
```

### `colorDistance(rgb1, rgb2)`

calculates how different two colors are

```javascript
const { colorDistance } = require('hex2pantone');
const distance = colorDistance([255, 0, 0], [0, 0, 0]);
console.log(distance); // 441.67
```

## examples

### basic color conversion

```javascript
const { hex2pantone } = require('hex2pantone');

// just some colors to test
const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFFFF', '#000000'];

colors.forEach(hex => {
  const result = hex2pantone(hex);
  console.log(`${hex} → ${result.match.name}`);
});
```

### advanced stuff with options

```javascript
const { hex2pantone } = require('hex2pantone');

// get detailed match info
const result = hex2pantone('#FF5733', {
  includeDistance: true,
  maxDistance: 100
});

if (result.match) {
  console.log(`match: ${result.match.name}`);
  console.log(`distance: ${result.distance}`);
  console.log(`pantone hex: ${result.match.hex}`);
} else {
  console.log('no close match found');
}
```

### search and filter colors

```javascript
const { searchPantoneColors, getAllPantoneColors } = require('hex2pantone');

// search for specific colors
const blueColors = searchPantoneColors('blue');
console.log(`found ${blueColors.length} blue colors`);

// get all colors
const allColors = getAllPantoneColors();
console.log(`total pantone colors: ${allColors.length}`);
```

### typescript usage

```typescript
import { hex2pantone, Hex2PantoneResult } from 'hex2pantone';

const result: Hex2PantoneResult = hex2pantone('#FF5733');
console.log(result.match?.name);
```

## how it works

i use euclidean distance in rgb color space to find the closest pantone match:

```javascript
distance = √((r2-r1)² + (g2-g1)² + (b2-b1)²)
```

works pretty well for most cases, though if you need super accurate color matching you might want to use lab color space or something fancier.

## pantone color database

i included 47 pantone colors that seemed useful:

- **red**: various shades of red and pink
- **orange**: orange and warm tones  
- **yellow**: yellow and light tones
- **green**: green and nature tones
- **blue**: blue and cool tones
- **purple**: purple and violet tones
- **brown**: brown and earth tones
- **gray**: black, white, and gray scale

## browser usage

```html
<script src="https://unpkg.com/hex2pantone@latest/index.js"></script>
<script>
  const result = hex2pantone('#FF5733');
  console.log(result.match.name);
</script>
```

## testing

run the tests:

```bash
npm test
```

i wrote tests for:
- basic color conversion
- edge cases and error handling
- color distance calculations
- search functionality
- typescript definitions

## contributing

contributions are welcome! feel free to submit a pull request.

1. fork the repository
2. create your feature branch (`git checkout -b feature/amazing-feature`)
3. commit your changes (`git commit -m 'add some amazing feature'`)
4. push to the branch (`git push origin feature/amazing-feature`)
5. open a pull request

## license

this project is licensed under the mit license - see the [license](license) file for details.

## changelog

### 1.0.0
- initial release
- basic hex to pantone conversion
- 47 pantone colors included
- typescript support
- comprehensive test suite

## support

if you find this package useful, please consider:

- ⭐ starring the repository
- 🐛 reporting bugs
- 💡 suggesting new features
- 📖 improving documentation

## related packages

- [color](https://www.npmjs.com/package/color) - color manipulation library
- [chroma-js](https://www.npmjs.com/package/chroma-js) - color scale library
- [tinycolor2](https://www.npmjs.com/package/tinycolor2) - color manipulation utility

---

made with ❤️ for designers and developers who love colors!
