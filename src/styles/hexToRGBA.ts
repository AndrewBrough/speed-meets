const validHexRegex = new RegExp(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i);

export const hexToRgba = (hex: string, opacity = 1): string => {
  const result = validHexRegex.exec(hex);
  // Regex will capture either three or four pairs of hex digits
  if (result) {
    const convertedValues = result.splice(1).map(hexValue => parseInt(hexValue, 16));
    if (Number.isNaN(convertedValues[3])) {
      return `rgba(${convertedValues[0]}, ${convertedValues[1]}, ${convertedValues[2]}, ${opacity})`;
    } else {
      // if there are four hex values, the first value is the alpha value
      return `rgba(${convertedValues[1]}, ${convertedValues[2]}, ${convertedValues[3]}, ${
        convertedValues[0] / 100
      })`;
    }
  } else return null;
};
