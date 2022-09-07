import { ThemeProvider } from "@emotion/react";

const theme = {
  colors: {
    primary: "#1ea7fd",
    secondary: "transparent",
  },
};

const EmotionThemeProvider = (storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

export default EmotionThemeProvider