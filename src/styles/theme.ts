import { css, Interpolation, CSSProp } from "styled-components";

const fontCreator = (fontSize: string, fontWeight: number, lineHeight: string) => {
  return css`
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
  `;
};

interface Theme {
  color: {
    darkGray900: string;
    darkGray800: string;
    darkGray700: string;
    darkGray600: string;
    darkGray500: string;
    darkGray400: string;
    darkGray300: string;
    lightGray400: string;
    lightGray300: string;
    lightGray200: string;
    lightGray100: string;
    linkGreen700: string;
    linkGreen600: string;
    linkGreen500: string;
    linkError: string;
  };
  font: {
    subtitle1: Interpolation<object>[];
    subtitle2: Interpolation<object>[];
    subtitle3: Interpolation<object>[];
    subtitle4: Interpolation<object>[];
    subtitle5b: Interpolation<object>[];
    subtitle5r: Interpolation<object>[];

    body1b: Interpolation<object>[];
    body1r: Interpolation<object>[];
    body2b: Interpolation<object>[];
    body2r: Interpolation<object>[];
    body3b: Interpolation<object>[];
    body3r: Interpolation<object>[];

    caption1b: Interpolation<object>[];
    caption1l: Interpolation<object>[];
    caption2b: Interpolation<object>[];
    caption2r: Interpolation<object>[];
  };
  scroll: CSSProp;
  unableToDrag: CSSProp;
  grabbable: CSSProp;
  textOverflow: CSSProp;
}

export const theme: Theme = {
  color: {
    darkGray900: "#121212",
    darkGray800: "#1E1E1E",
    darkGray700: "#2C2C2C",
    darkGray600: "#373737",
    darkGray500: "#4D4D4D",
    darkGray400: "#616161",
    darkGray300: "#727272",
    lightGray400: "#B4B4B4",
    lightGray300: "#D9D9D9",
    lightGray200: "#EDE5E5",
    lightGray100: "#EDEDED",
    linkGreen700: "#5B9A74",
    linkGreen600: "#5FD18D",
    linkGreen500: "#56F094",
    linkError: "#9D1414",
  },
  font: {
    subtitle1: fontCreator("40px", 700, "150%"),
    subtitle2: fontCreator("32px", 700, "150%"),
    subtitle3: fontCreator("28px", 700, "150%"),
    subtitle4: fontCreator("24px", 700, "150%"),
    subtitle5b: fontCreator("20px", 700, "150%"),
    subtitle5r: fontCreator("20px", 400, "150%"),

    body1b: fontCreator("18px", 700, "150%"),
    body1r: fontCreator("18px", 400, "150%"),
    body2b: fontCreator("16px", 700, "150%"),
    body2r: fontCreator("16px", 400, "150%"),
    body3b: fontCreator("14px", 700, "160%"),
    body3r: fontCreator("14px", 500, "160%"),

    caption1b: fontCreator("12px", 700, "150%"),
    caption1l: fontCreator("12px", 300, "150%"),
    caption2b: fontCreator("10px", 700, "160%"),
    caption2r: fontCreator("10px", 400, "160%"),
  },
  scroll: css`
    overflow-y: scroll;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  `,
  unableToDrag: css`
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  `,
  grabbable: css`
    cursor: move; /* fallback if grab cursor is unsupported */
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
  `,
  textOverflow: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
};

export type fontKeys = keyof typeof theme.font;
export type ColorKeys = keyof typeof theme.color;
