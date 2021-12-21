import chakraTheme from "@chakra-ui/theme";

export const theme = {
  ...chakraTheme,
  styles: {
    ...chakraTheme.styles,
    global: {
      ...chakraTheme.styles.global,
    },
  },
  breakpoints: {
    ...chakraTheme.breakpoints,
    xl: "70em",
    "2xl": "80em",
    "3xl": "96em",
  },
  colors: {
    ...chakraTheme.colors,
    blue: {
      50: "#edf9ff",
      100: "#ddf3ff",
      200: "#afd7ff",
      300: "#7ebcff",
      400: "#4da1ff",
      500: "#2086fe",
      600: "#0a6ce5",
      700: "#0054b3",
      800: "#003c81",
      900: "#002450",
    },
    cyan: {
      50: "#edfcff",
      100: "#dcfaff",
      200: "#b4eafb",
      300: "#89daf4",
      400: "#5dccee",
      500: "#36bde8",
      600: "#20a4cf",
      700: "#117fa2",
      800: "#035b75",
      900: "#003848",
    },
    red: {
      50: "#ffe5e5",
      100: "#fbb8b8",
      200: "#f48a8a",
      300: "#f48a8a",
      400: "#f48a8a",
      500: "#ef5d5d",
      600: "#e9302e",
      700: "#750b0b",
      800: "#470505",
      900: "#1d0000",
    },
    purple: {
      50: "#f0e4ff",
      100: "#cbb2ff",
      200: "#a880ff",
      300: "#864dff",
      400: "#631bfe",
      500: "#4a02e5",
      600: "#3900b3",
      700: "#290081",
      800: "#17004f",
      900: "#09001f",
    },
    grey: "#A0B6D7",
    background: "#EEF4FD",
    lightBackground: "#F2F6FB",
    greyText: "#75818D",
    modalBG: "rgba(98, 118, 148, 0.9)",
    modalOpaqueBG: "rgba(98, 118, 148, 1)",
  },
  fonts: {
    ...chakraTheme.fonts,
    body: "Roboto, sans-serif",
  },
};
