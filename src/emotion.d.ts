import "@emotion/react";

/* This will be adjusted according to your custom theme */
declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
    };
  }
}
