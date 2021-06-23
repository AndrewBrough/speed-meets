import { hexToRgba } from "./hexToRgba";
import * as palette from "./palette";

/*
 * NEW DS3 Color spectrums
 */

// Greens
export const green = {
  base: palette.green80,
  darkFamily: {
    // Active states
    darker: palette.green100,
    // Focus states
    dark: palette.green90,
    // Default states
    normal: palette.green80,
    // Hover states
    light: palette.green70,
  },
  lightFamily: {
    darker: palette.green30,
    dark: palette.green20,
    normal: palette.green10,
    light: palette.green05,
  },
};

// Greys
export const grey = {
  base: palette.gray80,
  darkFamily: {
    // Active states
    darker: palette.gray100,
    // Focus states
    dark: palette.gray90,
    // Default states
    normal: palette.gray80,
    // Hover states
    light: palette.gray70,
  },
  lightFamily: {
    darker: palette.gray30,
    dark: palette.gray20,
    normal: palette.gray10,
    light: palette.gray05,
  },
};

// Blues
export const blue = {
  base: palette.blue70,
  darkFamily: {
    darker: palette.blue100,
    dark: palette.blue90,
    normal: palette.blue80,
    light: palette.blue70,
  },
  lightFamily: {
    darker: palette.blue30,
    dark: palette.blue20,
    normal: palette.blue10,
    light: palette.blue05,
  },
};

// Reds
export const red = {
  base: palette.red80,
  darkFamily: {
    // Active states
    darker: palette.red100,
    // Focus states
    dark: palette.red90,
    // Default states
    normal: palette.red80,
    // Hover states
    light: palette.red70,
  },
  lightFamily: {
    darker: palette.red30,
    dark: palette.red20,
    normal: palette.red10,
    light: palette.red05,
  },
};

// Oranges
export const orange = {
  base: palette.orange80,
  darkFamily: {
    // Active states
    darker: palette.orange100,
    // Focus states
    dark: palette.orange90,
    // Default states
    normal: palette.orange80,
    // Hover states
    light: palette.orange70,
  },
  lightFamily: {
    darker: palette.orange30,
    dark: palette.orange20,
    normal: palette.orange10,
    light: palette.orange05,
  },
};

// Purples
export const purple = {
  base: palette.purple80,
  darkFamily: {
    // Active states
    darker: palette.purple100,
    // Focus states
    dark: palette.purple90,
    // Default states
    normal: palette.purple80,
    // Hover states
    light: palette.purple70,
  },
  lightFamily: {
    darker: palette.purple30,
    dark: palette.purple20,
    normal: palette.purple10,
    light: palette.purple05,
  },
};

// Names/Aliases
export const dark = grey.darkFamily.dark;
export const primary = green.base;
export const warning = orange.base;
export const danger = red.base;
export const success = green.base;
export const light = grey.lightFamily.dark;
export const royal = purple.base;
export const info = blue.base;
export const white = palette.white;
export const black = palette.black;
export const lightGreen = palette.silt;

// Background
export const background = grey.lightFamily.normal;
export const backgroundWhite = palette.white;
export const backgroundHighlighter = palette.highlighter;
export const highlight = palette.highlighter;
export const backgroundModal = hexToRgba(palette.black, 0.2);

// Borders and separators
export const separator = grey.lightFamily.normal;
export const splitButtonSeparator = hexToRgba(palette.white, 0.75);
export const splitButtonDisabledSeparator = hexToRgba(grey.lightFamily.dark, 0.5);

export const disabledColorOnBlack = hexToRgba(palette.white, 0.5);

// Social media icon colors
export const facebookBlue = palette.facebookBlue;
export const twitterBlue = palette.twitterBlue;
export const linkedInBlue = palette.linkedInBlue;
