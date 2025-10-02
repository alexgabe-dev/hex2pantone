// hex2pantone - because sometimes you need to know what that hex actually looks like in print
// made by alexgabe-dev

// my collection of pantone colors (i added more as i found them useful)
const pantoneColors = [
  // red
  { name: "Pantone 18-1664 TPX", code: "PANTONE 18-1664 TPX", hex: "#C5282F", rgb: [197, 40, 47] },
  { name: "Pantone 18-1763 TPX", code: "PANTONE 18-1763 TPX", hex: "#D2691E", rgb: [210, 105, 30] },
  { name: "Pantone 19-1664 TPX", code: "PANTONE 19-1664 TPX", hex: "#B22222", rgb: [178, 34, 34] },
  { name: "Pantone 19-1763 TPX", code: "PANTONE 19-1763 TPX", hex: "#CD5C5C", rgb: [205, 92, 92] },
  
  // orange
  { name: "Pantone 17-1463 TPX", code: "PANTONE 17-1463 TPX", hex: "#FF8C00", rgb: [255, 140, 0] },
  { name: "Pantone 16-1546 TPX", code: "PANTONE 16-1546 TPX", hex: "#FF7F50", rgb: [255, 127, 80] },
  { name: "Pantone 15-1264 TPX", code: "PANTONE 15-1264 TPX", hex: "#FFA500", rgb: [255, 165, 0] },
  { name: "Pantone 14-1058 TPX", code: "PANTONE 14-1058 TPX", hex: "#FFD700", rgb: [255, 215, 0] },
  
  // Yelow
  { name: "Pantone 13-0859 TPX", code: "PANTONE 13-0859 TPX", hex: "#FFFF00", rgb: [255, 255, 0] },
  { name: "Pantone 12-0741 TPX", code: "PANTONE 12-0741 TPX", hex: "#F0E68C", rgb: [240, 230, 140] },
  { name: "Pantone 11-0617 TPX", code: "PANTONE 11-0617 TPX", hex: "#F5DEB3", rgb: [245, 222, 179] },
  { name: "Pantone 10-0515 TPX", code: "PANTONE 10-0515 TPX", hex: "#FFF8DC", rgb: [255, 248, 220] },
  
  // Green
  { name: "Pantone 18-5632 TPX", code: "PANTONE 18-5632 TPX", hex: "#228B22", rgb: [34, 139, 34] },
  { name: "Pantone 17-5332 TPX", code: "PANTONE 17-5332 TPX", hex: "#32CD32", rgb: [50, 205, 50] },
  { name: "Pantone 16-6340 TPX", code: "PANTONE 16-6340 TPX", hex: "#00FF00", rgb: [0, 255, 0] },
  { name: "Pantone 15-0343 TPX", code: "PANTONE 15-0343 TPX", hex: "#ADFF2F", rgb: [173, 255, 47] },
  { name: "Pantone 14-4318 TPX", code: "PANTONE 14-4318 TPX", hex: "#7FFFD4", rgb: [127, 255, 212] },
  { name: "Pantone 13-5309 TPX", code: "PANTONE 13-5309 TPX", hex: "#00FA9A", rgb: [0, 250, 154] },
  
  // blue
  { name: "Pantone 19-4052 TPX", code: "PANTONE 19-4052 TPX", hex: "#000080", rgb: [0, 0, 128] },
  { name: "Pantone 18-4241 TPX", code: "PANTONE 18-4241 TPX", hex: "#0000FF", rgb: [0, 0, 255] },
  { name: "Pantone 17-4132 TPX", code: "PANTONE 17-4132 TPX", hex: "#4169E1", rgb: [65, 105, 225] },
  { name: "Pantone 16-4031 TPX", code: "PANTONE 16-4031 TPX", hex: "#1E90FF", rgb: [30, 144, 255] },
  { name: "Pantone 15-4318 TPX", code: "PANTONE 15-4318 TPX", hex: "#87CEEB", rgb: [135, 206, 235] },
  { name: "Pantone 14-4318 TPX", code: "PANTONE 14-4318 TPX", hex: "#B0E0E6", rgb: [176, 224, 230] },
  
  // pureple
  { name: "Pantone 19-3738 TPX", code: "PANTONE 19-3738 TPX", hex: "#4B0082", rgb: [75, 0, 130] },
  { name: "Pantone 18-3838 TPX", code: "PANTONE 18-3838 TPX", hex: "#8A2BE2", rgb: [138, 43, 226] },
  { name: "Pantone 17-3027 TPX", code: "PANTONE 17-3027 TPX", hex: "#9370DB", rgb: [147, 112, 219] },
  { name: "Pantone 16-3118 TPX", code: "PANTONE 16-3118 TPX", hex: "#DA70D6", rgb: [218, 112, 214] },
  { name: "Pantone 15-2718 TPX", code: "PANTONE 15-2718 TPX", hex: "#FF69B4", rgb: [255, 105, 180] },
  
  // pinK 
  { name: "Pantone 17-2031 TPX", code: "PANTONE 17-2031 TPX", hex: "#FF1493", rgb: [255, 20, 147] },
  { name: "Pantone 16-2120 TPX", code: "PANTONE 16-2120 TPX", hex: "#FFB6C1", rgb: [255, 182, 193] },
  { name: "Pantone 15-2215 TPX", code: "PANTONE 15-2215 TPX", hex: "#FFC0CB", rgb: [255, 192, 203] },
  { name: "Pantone 14-1907 TPX", code: "PANTONE 14-1907 TPX", hex: "#FFE4E1", rgb: [255, 228, 225] },
  
  // brown 
  { name: "Pantone 19-1015 TPX", code: "PANTONE 19-1015 TPX", hex: "#8B4513", rgb: [139, 69, 19] },
  { name: "Pantone 18-1031 TPX", code: "PANTONE 18-1031 TPX", hex: "#A0522D", rgb: [210, 180, 140] },
  { name: "Pantone 17-1027 TPX", code: "PANTONE 17-1027 TPX", hex: "#D2691E", rgb: [210, 105, 30] },
  { name: "Pantone 16-1339 TPX", code: "PANTONE 16-1339 TPX", hex: "#DEB887", rgb: [222, 184, 135] },
  
  // gray
  { name: "Pantone 19-0000 TPX", code: "PANTONE 19-0000 TPX", hex: "#000000", rgb: [0, 0, 0] },
  { name: "Pantone 18-0000 TPX", code: "PANTONE 18-0000 TPX", hex: "#2F2F2F", rgb: [47, 47, 47] },
  { name: "Pantone 17-0000 TPX", code: "PANTONE 17-0000 TPX", hex: "#696969", rgb: [105, 105, 105] },
  { name: "Pantone 16-0000 TPX", code: "PANTONE 16-0000 TPX", hex: "#808080", rgb: [128, 128, 128] },
  { name: "Pantone 15-0000 TPX", code: "PANTONE 15-0000 TPX", hex: "#A9A9A9", rgb: [169, 169, 169] },
  { name: "Pantone 14-0000 TPX", code: "PANTONE 14-0000 TPX", hex: "#C0C0C0", rgb: [192, 192, 192] },
  { name: "Pantone 13-0000 TPX", code: "PANTONE 13-0000 TPX", hex: "#D3D3D3", rgb: [192, 192, 192] },
  { name: "Pantone 12-0000 TPX", code: "PANTONE 12-0000 TPX", hex: "#DCDCDC", rgb: [220, 220, 220] },
  { name: "Pantone 11-0000 TPX", code: "PANTONE 11-0000 TPX", hex: "#F5F5F5", rgb: [245, 245, 245] },
  { name: "Pantone 10-0000 TPX", code: "PANTONE 10-0000 TPX", hex: "#FFFFFF", rgb: [255, 255, 255] }
];

// helper function to turn hex into rgb - had to look this up tbh
function hexToRgb(hex) {
  // get rid of the # if someone put it there
  hex = hex.replace('#', '');
  
  // handle those short 3 char hex codes like #f00
  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('');
  }
  
  // make sure it's actually a valid hex
  if (!/^[0-9A-Fa-f]{6}$/.test(hex)) {
    throw new Error('that hex color looks wrong to me');
  }
  
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return [r, g, b];
}

// calculate how different two colors are (the math stuff)
function colorDistance(rgb1, rgb2) {
  const [r1, g1, b1] = rgb1;
  const [r2, g2, b2] = rgb2;
  
  return Math.sqrt(
    Math.pow(r2 - r1, 2) + 
    Math.pow(g2 - g1, 2) + 
    Math.pow(b2 - b1, 2)
  );
}

// the main function that does the magic
function hex2pantone(hexColor, options = {}) {
  const { includeDistance = false, maxDistance = null } = options;
  
  try {
    const inputRgb = hexToRgb(hexColor);
    
    let bestMatch = null;
    let smallestDistance = Infinity;
    
    // go through all my pantone colors and find the closest one
    for (const pantoneColor of pantoneColors) {
      const distance = colorDistance(inputRgb, pantoneColor.rgb);
      
      if (distance < smallestDistance) {
        smallestDistance = distance;
        bestMatch = pantoneColor;
      }
    }
    
    // if the distance is too big, maybe it's not a good match
    if (maxDistance !== null && smallestDistance > maxDistance) {
      return {
        match: null,
        message: `couldn't find a pantone color close enough (distance: ${smallestDistance})`,
        inputHex: hexColor,
        inputRgb: inputRgb
      };
    }
    
    const result = {
      match: {
        name: bestMatch.name,
        code: bestMatch.code,
        hex: bestMatch.hex,
        rgb: bestMatch.rgb
      },
      inputHex: hexColor,
      inputRgb: inputRgb
    };
    
    if (includeDistance) {
      result.distance = Math.round(smallestDistance * 100) / 100;
    }
    
    return result;
    
  } catch (error) {
    return {
      error: error.message,
      inputHex: hexColor
    };
  }
}

// get all the pantone colors i have
function getAllPantoneColors() {
  return pantoneColors.map(color => ({ ...color }));
}

// search through my pantone colors (this got a bit messy but it works)
function searchPantoneColors(query) {
  const searchTerm = query.toLowerCase();
  return pantoneColors.filter(color => 
    color.name.toLowerCase().includes(searchTerm) ||
    color.code.toLowerCase().includes(searchTerm) ||
    // some basic color family matching
    (searchTerm === 'red' && (color.hex.includes('FF') && color.rgb[0] > color.rgb[1] && color.rgb[0] > color.rgb[2])) ||
    (searchTerm === 'green' && (color.hex.includes('00') && color.rgb[1] > color.rgb[0] && color.rgb[1] > color.rgb[2])) ||
    (searchTerm === 'blue' && (color.hex.includes('00') && color.rgb[2] > color.rgb[0] && color.rgb[2] > color.rgb[1])) ||
    (searchTerm === 'yellow' && (color.rgb[0] > 200 && color.rgb[1] > 200 && color.rgb[2] < 100)) ||
    (searchTerm === 'orange' && (color.rgb[0] > color.rgb[1] && color.rgb[1] > color.rgb[2] && color.rgb[0] > 200)) ||
    (searchTerm === 'purple' && (color.rgb[0] > 100 && color.rgb[2] > 100 && color.rgb[1] < color.rgb[0] && color.rgb[1] < color.rgb[2])) ||
    (searchTerm === 'pink' && (color.rgb[0] > 200 && color.rgb[1] > 100 && color.rgb[2] > 100)) ||
    (searchTerm === 'brown' && (color.rgb[0] > 100 && color.rgb[1] < 150 && color.rgb[2] < 100)) ||
    (searchTerm === 'gray' && (Math.abs(color.rgb[0] - color.rgb[1]) < 50 && Math.abs(color.rgb[1] - color.rgb[2]) < 50)) ||
    (searchTerm === 'white' && (color.rgb[0] > 240 && color.rgb[1] > 240 && color.rgb[2] > 240)) ||
    (searchTerm === 'black' && (color.rgb[0] < 50 && color.rgb[1] < 50 && color.rgb[2] < 50))
  );
}

// export everything so people can use it
module.exports = {
  hex2pantone,
  getAllPantoneColors,
  searchPantoneColors,
  hexToRgb,
  colorDistance
};
