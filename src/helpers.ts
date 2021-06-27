export const randomHexColor = () => {
  return Math.random().toString(16).substr(2, 6);
};

export const getLuminosity = (hex: string) => {
  const [r, g, b] = toRGB(hex);
  const brightness = (299 * r + 587 * g + 114 * b) / 1000;
  return brightness;
};

const toRGB = (hex: string) => {
  if (hex.length === 3)
    hex = hex
      .split('')
      .map(char => char + char)
      .join('');

  let rgb = [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)];
  return rgb.map(color => parseInt(color, 16));
};
