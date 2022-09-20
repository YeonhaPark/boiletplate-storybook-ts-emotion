import { ThemeProvider } from "@emotion/react";

const theme = {
  colors: {
    primary: "#1ea7fd",
    secondary: "#404656",
  },
};

const EmotionThemeProvider = (storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

export default EmotionThemeProvider