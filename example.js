// example of how to use hex2pantone

const { hex2pantone, getAllPantoneColors, searchPantoneColors, batchConvert, getSuccessfulMatches } = require('./index.js');

console.log('🎨 hex2pantone example\n');

// just some basic colors to test
console.log('1. basic color conversion:');
const colors = ['#FF0000', '#00FF00', '#0000FF', '#FF5733', '#8A2BE2'];
colors.forEach(hex => {
  const result = hex2pantone(hex);
  console.log(`   ${hex} → ${result.match.name} (${result.match.hex})`);
});

console.log('\n2. detailed stuff:');
const detailedResult = hex2pantone('#FF5733', { includeDistance: true });
console.log(`   input: ${detailedResult.inputHex}`);
console.log(`   match: ${detailedResult.match.name}`);
console.log(`   pantone hex: ${detailedResult.match.hex}`);
console.log(`   distance: ${detailedResult.distance}`);

console.log('\n3. search for colors:');
const redColors = searchPantoneColors('red');
console.log(`   found ${redColors.length} red colors:`);
redColors.slice(0, 3).forEach(color => {
  console.log(`   - ${color.name} (${color.hex})`);
});

console.log('\n4. how many colors i have:');
const allColors = getAllPantoneColors();
console.log(`   total pantone colors: ${allColors.length}`);

console.log('\n5. search by color family:');
const families = ['red', 'blue', 'green', 'yellow', 'purple'];
families.forEach(family => {
  const familyColors = searchPantoneColors(family);
  console.log(`   ${family}: ${familyColors.length} colors`);
});

console.log('\n6. batch processing(new stuff! yay):');
const batchColors = ['#FF0000', '#00FF00', '#0000FF', '#FF5733', '#8A2BE2', '#invaled', '#FFFFFF'];
const batchResult = batchConvert(batchColors, { includeDistance: true });

console.log(`   processed ${batchResult.total} colors:`);
console.log(`   successful: ${batchResult.successful}, failed: ${batchResult.failed}`);
console.log(`   success rate: ${batchResult.successRate}%`);

console.log('\n   successful matches:');
const successful = getSuccessfulMatches(batchResult);
successful.forEach((result, i) => {
  console.log(`   ${i + 1}. ${result.inputHex} → ${result.match.name} (distance: ${result.distance})`);
});

console.log('\n   failed ones:');
const failed = batchResult.results.filter(r => !r.success);
failed.forEach((result, i) => {
  console.log(`   ${i + 1}. ${result.inputHex} - ${result.error}`);
});

console.log('\n✨ hex2pantone is ready to use!');
