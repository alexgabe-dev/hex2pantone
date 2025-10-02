# hex2pantone

Convert hex colors to Pantone colors because sometimes you need to know what that hex actually looks like in print.

Made by [@alexgabe-dev](https://github.com/alexgabe-dev) - a web developer who likes colors and making things work.

[![npm version](https://badge.fury.io/js/hex2pantone.svg)](https://badge.fury.io/js/hex2pantone)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## What it does

- 🎨 Turns your hex colors into Pantone colors (the closest match anyway)
- 📊 I collected like 47 Pantone colors that seemed useful
- 🔍 You can search through them by color name or just type "red" or "blue"
- 📏 Shows you how close the match actually is
- 🎯 TypeScript definitions included (because why not)
- 🧪 I wrote tests for it so it probably works
- 📱 Works in Node.js and browsers

## Installation

```bash
npm install hex2pantone
```

## Quick Start

```javascript
const { hex2pantone } = require('hex2pantone');

// just give it a hex color and it'll find the closest pantone
const result = hex2pantone('#FF5733');
console.log(result.match.name); // "Pantone 17-1463 TPX"
console.log(result.match.hex);  // "#FF8C00"
```

## API Reference

### `hex2pantone(hexColor, options?)`

Converts a hex color to the closest Pantone color match.

**Parameters:**
- `hexColor` (string): Hex color code (e.g., '#FF5733' or 'FF5733')
- `options` (object, optional):
  - `includeDistance` (boolean): Include color distance in result
  - `maxDistance` (number): Maximum distance threshold for matches

**Returns:**
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
  distance: 45.2 // Only included if includeDistance: true
}
```

### `getAllPantoneColors()`

Returns all available Pantone colors.

```javascript
const { getAllPantoneColors } = require('hex2pantone');
const colors = getAllPantoneColors();
console.log(colors.length); // 50+
```

### `searchPantoneColors(query)`

Searches for Pantone colors by name or code.

```javascript
const { searchPantoneColors } = require('hex2pantone');
const redColors = searchPantoneColors('red');
console.log(redColors); // Array of red Pantone colors
```

### `hexToRgb(hex)`

Converts a hex color to RGB values.

```javascript
const { hexToRgb } = require('hex2pantone');
const rgb = hexToRgb('#FF5733');
console.log(rgb); // [255, 87, 51]
```

### `colorDistance(rgb1, rgb2)`

Calculates the Euclidean distance between two RGB colors.

```javascript
const { colorDistance } = require('hex2pantone');
const distance = colorDistance([255, 0, 0], [0, 0, 0]);
console.log(distance); // 441.67
```

## Usage Examples

### Basic Color Conversion

```javascript
const { hex2pantone } = require('hex2pantone');

// Convert various colors
const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFFFF', '#000000'];

colors.forEach(hex => {
  const result = hex2pantone(hex);
  console.log(`${hex} → ${result.match.name}`);
});
```

### Advanced Usage with Options

```javascript
const { hex2pantone } = require('hex2pantone');

// Get detailed match information
const result = hex2pantone('#FF5733', {
  includeDistance: true,
  maxDistance: 100
});

if (result.match) {
  console.log(`Match: ${result.match.name}`);
  console.log(`Distance: ${result.distance}`);
  console.log(`Pantone Hex: ${result.match.hex}`);
} else {
  console.log('No close match found');
}
```

### Search and Filter Colors

```javascript
const { searchPantoneColors, getAllPantoneColors } = require('hex2pantone');

// Search for specific colors
const blueColors = searchPantoneColors('blue');
console.log(`Found ${blueColors.length} blue colors`);

// Get all colors
const allColors = getAllPantoneColors();
console.log(`Total Pantone colors: ${allColors.length}`);
```

### TypeScript Usage

```typescript
import { hex2pantone, Hex2PantoneResult } from 'hex2pantone';

const result: Hex2PantoneResult = hex2pantone('#FF5733');
console.log(result.match?.name);
```

## Color Matching Algorithm

The package uses Euclidean distance in RGB color space to find the closest Pantone match:

```javascript
distance = √((r2-r1)² + (g2-g1)² + (b2-b1)²)
```

This provides accurate color matching for most use cases, though for professional color matching, consider using LAB color space or perceptual color models.

## Pantone Color Database

The package includes 50+ carefully selected Pantone colors covering:

- **Red Family**: Various shades of red and pink
- **Orange Family**: Orange and warm tones  
- **Yellow Family**: Yellow and light tones
- **Green Family**: Green and nature tones
- **Blue Family**: Blue and cool tones
- **Purple Family**: Purple and violet tones
- **Brown Family**: Brown and earth tones
- **Gray Family**: Black, white, and gray scale

## Browser Usage

```html
<script src="https://unpkg.com/hex2pantone@latest/index.js"></script>
<script>
  const result = hex2pantone('#FF5733');
  console.log(result.match.name);
</script>
```

## Testing

Run the test suite:

```bash
npm test
```

The package includes comprehensive tests covering:
- Basic color conversion
- Edge cases and error handling
- Color distance calculations
- Search functionality
- TypeScript definitions

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

### 1.0.0
- Initial release
- Basic hex to Pantone conversion
- 50+ Pantone colors included
- TypeScript support
- Comprehensive test suite

## Support

If you find this package useful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 📖 Improving documentation

## Related Packages

- [color](https://www.npmjs.com/package/color) - Color manipulation library
- [chroma-js](https://www.npmjs.com/package/chroma-js) - Color scale library
- [tinycolor2](https://www.npmjs.com/package/tinycolor2) - Color manipulation utility

---

Made with ❤️ for designers and developers who love colors!
