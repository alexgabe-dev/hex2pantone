// tests for hex2pantone - making sure it actually works
const { hex2pantone, getAllPantoneColors, searchPantoneColors, hexToRgb, colorDistance, batchConvert, getSuccessfulMatches, getFailedMatches } = require('./index.js');

// helper functions for testing
function assert(condition, message) {
  if (!condition) {
    throw new Error(`oops: ${message}`);
  }
}

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(`nope: ${message}. Expected: ${expected}, Got: ${actual}`);
  }
}

function assertArrayEqual(actual, expected, message) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(`arrays don't match: ${message}. Expected: ${JSON.stringify(expected)}, Got: ${JSON.stringify(actual)}`);
  }
}

function runTest(testName, testFunction) {
  try {
    testFunction();
    console.log(`ok ${testName}`);
    return true;
  } catch (error) {
    console.log(`nok ${testName}: ${error.message}`);
    return false;
  }
}

// Test cases
const tests = [
  // Basic hex2pantone functionality
  function testBasicHex2Pantone() {
    const result = hex2pantone('#FF0000');
    assert(result.match !== null, 'Should find a match for red color');
    assert(result.inputHex === '#FF0000', 'Should preserve input hex');
    assert(Array.isArray(result.inputRgb), 'Should include input RGB');
    assert(result.inputRgb.length === 3, 'Input RGB should have 3 components');
  },

  function testHex2PantoneWithDistance() {
    const result = hex2pantone('#FF0000', { includeDistance: true });
    assert(typeof result.distance === 'number', 'Should include distance when requested');
    assert(result.distance >= 0, 'Distance should be non-negative');
  },

  function testHex2PantoneWithMaxDistance() {
    const result = hex2pantone('#FF0000', { maxDistance: 0 });
    assert(result.match === null, 'Should return no match when maxDistance is 0');
    assert(result.message !== undefined, 'Should include message when no match found');
  },

  function testHex2PantoneWithMaxDistancePass() {
    const result = hex2pantone('#FF0000', { maxDistance: 500 });
    assert(result.match !== null, 'Should find match when maxDistance is reasonable');
  },

  // Hex to RGB conversion
  function testHexToRgb() {
    const rgb = hexToRgb('#FF0000');
    assertArrayEqual(rgb, [255, 0, 0], 'Should convert red hex to correct RGB');
  },

  function testHexToRgbWithoutHash() {
    const rgb = hexToRgb('FF0000');
    assertArrayEqual(rgb, [255, 0, 0], 'Should handle hex without #');
  },

  function testHexToRgbShortForm() {
    const rgb = hexToRgb('#F00');
    assertArrayEqual(rgb, [255, 0, 0], 'Should handle 3-digit hex');
  },

  function testHexToRgbShortFormWithoutHash() {
    const rgb = hexToRgb('F00');
    assertArrayEqual(rgb, [255, 0, 0], 'Should handle 3-digit hex without #');
  },

  function testHexToRgbInvalidFormat() {
    try {
      hexToRgb('invalid');
      assert(false, 'Should throw error for invalid hex format');
    } catch (error) {
      assert(error.message.includes('that hex color looks wrong to me'), 'Should throw appropriate error message');
    }
  },

  // Color distance calculation
  function testColorDistance() {
    const distance = colorDistance([255, 0, 0], [0, 0, 0]);
    assert(distance > 0, 'Distance should be positive for different colors');
  },

  function testColorDistanceSameColor() {
    const distance = colorDistance([255, 0, 0], [255, 0, 0]);
    assertEqual(distance, 0, 'Distance should be 0 for identical colors');
  },

  // Pantone color utilities
  function testGetAllPantoneColors() {
    const colors = getAllPantoneColors();
    assert(Array.isArray(colors), 'Should return an array');
    assert(colors.length > 0, 'Should have Pantone colors');
    assert(colors[0].name !== undefined, 'Colors should have name property');
    assert(colors[0].code !== undefined, 'Colors should have code property');
    assert(colors[0].hex !== undefined, 'Colors should have hex property');
    assert(Array.isArray(colors[0].rgb), 'Colors should have rgb property');
  },

  function testSearchPantoneColors() {
    const results = searchPantoneColors('red');
    assert(Array.isArray(results), 'Should return an array');
    assert(results.length > 0, 'Should find red colors');
  },

  function testSearchPantoneColorsNoResults() {
    const results = searchPantoneColors('nonexistentcolor12345');
    assertEqual(results.length, 0, 'Should return empty array for no matches');
  },

  // Edge cases
  function testHex2PantoneInvalidHex() {
    const result = hex2pantone('invalid');
    assert(result.error !== undefined, 'Should return error for invalid hex');
  },

  function testHex2PantoneEmptyString() {
    const result = hex2pantone('');
    assert(result.error !== undefined, 'Should return error for empty string');
  },

  function testHex2PantoneNull() {
    const result = hex2pantone(null);
    assert(result.error !== undefined, 'Should return error for null input');
  },

  // Specific color tests
  function testRedColor() {
    const result = hex2pantone('#FF0000');
    assert(result.match !== null, 'Should find match for pure red');
    // The match should be a red-ish Pantone color
    assert(result.match.rgb[0] > result.match.rgb[1] && result.match.rgb[0] > result.match.rgb[2], 
           'Match should be red-dominant');
  },

  function testGreenColor() {
    const result = hex2pantone('#00FF00');
    assert(result.match !== null, 'Should find match for pure green');
    // The match should be a green-ish Pantone color
    assert(result.match.rgb[1] > result.match.rgb[0] && result.match.rgb[1] > result.match.rgb[2], 
           'Match should be green-dominant');
  },

  function testBlueColor() {
    const result = hex2pantone('#0000FF');
    assert(result.match !== null, 'Should find match for pure blue');
    // The match should be a blue-ish Pantone color
    assert(result.match.rgb[2] > result.match.rgb[0] && result.match.rgb[2] > result.match.rgb[1], 
           'Match should be blue-dominant');
  },

  function testWhiteColor() {
    const result = hex2pantone('#FFFFFF');
    assert(result.match !== null, 'Should find match for white');
    // The match should be a light/white Pantone color
    const [r, g, b] = result.match.rgb;
    assert(r > 200 && g > 200 && b > 200, 'Match should be light colored');
  },

  function testBlackColor() {
    const result = hex2pantone('#000000');
    assert(result.match !== null, 'Should find match for black');
    // The match should be a dark/black Pantone color
    const [r, g, b] = result.match.rgb;
    assert(r < 100 && g < 100 && b < 100, 'Match should be dark colored');
  },

  // Batch processing tests
  function testBatchConvertBasic() {
    const colors = ['#FF0000', '#00FF00', '#0000FF'];
    const result = batchConvert(colors);
    assert(result.total === 3, 'Should process all 3 colors');
    assert(result.successful === 3, 'Should successfully convert all colors');
    assert(result.failed === 0, 'Should have no failures');
    assert(result.successRate === 100, 'Should have 100% success rate');
  },

  function testBatchConvertWithErrors() {
    const colors = ['#FF0000', 'invalid', '#0000FF'];
    const result = batchConvert(colors);
    assert(result.total === 3, 'Should process all 3 colors');
    assert(result.successful === 2, 'Should successfully convert 2 colors');
    assert(result.failed === 1, 'Should have 1 failure');
    assert(result.successRate === 67, 'Should have 67% success rate');
  },

  function testBatchConvertEmptyArray() {
    const result = batchConvert([]);
    assert(result.total === 0, 'Should handle empty array');
    assert(result.successful === 0, 'Should have no successful conversions');
    assert(result.failed === 0, 'Should have no failures');
    assert(result.message !== undefined, 'Should include message for empty array');
  },

  function testBatchConvertInvalidInput() {
    const result = batchConvert('not an array');
    assert(result.error !== undefined, 'Should return error for invalid input');
  },

  function testBatchConvertWithOptions() {
    const colors = ['#FF0000', '#00FF00'];
    const result = batchConvert(colors, { includeDistance: true });
    assert(result.total === 2, 'Should process 2 colors');
    assert(result.results[0].distance !== undefined, 'Should include distance in results');
  },

  function testGetSuccessfulMatches() {
    const colors = ['#FF0000', 'invalid', '#00FF00'];
    const batchResult = batchConvert(colors);
    const successful = getSuccessfulMatches(batchResult);
    assert(successful.length === 2, 'Should return 2 successful matches');
    assert(successful.every(match => match.success), 'All matches should be successful');
  },

  function testGetFailedMatches() {
    const colors = ['#FF0000', 'invalid', '#00FF00'];
    const batchResult = batchConvert(colors);
    const failed = getFailedMatches(batchResult);
    assert(failed.length === 1, 'Should return 1 failed match');
    assert(failed.every(match => !match.success), 'All matches should be failed');
  },

  function testBatchConvertOriginalIndex() {
    const colors = ['#FF0000', 'invalid', '#00FF00'];
    const result = batchConvert(colors);
    assert(result.results[0].originalIndex === 0, 'First result should have index 0');
    assert(result.results[1].originalIndex === 1, 'Second result should have index 1');
    assert(result.results[2].originalIndex === 2, 'Third result should have index 2');
  }
];

// Run all tests
console.log('Running hex2pantone tests...\n');

let passed = 0;
let total = tests.length;

tests.forEach(test => {
  if (runTest(test.name, test)) {
    passed++;
  }
});

console.log(`\nTest Results: ${passed}/${total} tests passed`);

if (passed === total) {
  console.log('🎉 All tests passed!');
  process.exit(0);
} else {
  console.log('❌ Some tests failed');
  process.exit(1);
}
