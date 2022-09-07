import { addDecorator } from "@storybook/react";
import EmotionThemeProvider from "./decorators/EmotionThemeProvider";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(EmotionThemeProvider);
