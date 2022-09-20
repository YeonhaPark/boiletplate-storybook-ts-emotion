/** @jsxImportSource @emotion/react */
import React from "react";
import { css, useTheme, Theme, SerializedStyles } from "@emotion/react";

interface ButtonProps {
  mode?: "primary" | "secondary";
  css?: SerializedStyles;
  backgroundColor?: string;
  textColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  mode = "primary",
  size = "medium",
  backgroundColor,
  textColor,
  disabled,
  label,
  ...props
}: ButtonProps) => {
  const fontSize = {
    small: "12px",
    medium: "14px",
    large: "16px",
  };

  const padding = {
    small: "10px 16px",
    medium: "11px 20px",
    large: "12px 24px",
  };

  const boxShadow = {
    primary: "none",
    secondary: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
  };

  const theme: Theme = useTheme();

  const btnStyle = css`
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    font-size: ${fontSize[size]};
    padding: ${padding[size]};
    border: ${theme.colors[mode]};
    border-radius: 3em;
    box-shadow: ${boxShadow[mode]};
    color: ${textColor || "#fff"};
    background-color: ${backgroundColor || theme.colors[mode]};
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    &:not(&:disabled):hover {
      background-image: linear-gradient(rgb(0 0 0/8%) 0 0);
    }
    &:active {
      opacity: 0.5;
    }
    &:disabled {
      opacity: 0.5;
      pointer-events: none;
      cursor: not-allowed;
    }
  `;
  return (
    <button type="button" css={btnStyle} style={{ backgroundColor }} disabled={disabled} {...props}>
      {label}
    </button>
  );
};
