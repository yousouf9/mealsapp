import React from "react";
import { View } from "react-native";
import styled, { useTheme } from "styled-components/native";

const positionsVariant = {
  top: "margin-top",
  left: "margin-left",
  right: "margin-right",
  bottom: "margin-bottom",
};
const sizesVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const getVariant = (position, size, theme) => {
  const property = positionsVariant[position];
  const sizeIndex = sizesVariant[size];
  return `${property}: ${theme.space[sizeIndex]}`;
};

const SpacerView = styled(View)`
  ${({ variant }) => variant}
`;
SpacerView.defaultProps = {
  position: "top",
  size: "small",
};

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();

  const variant = getVariant(position, size, theme);

  return <SpacerView variant={variant}>{children}</SpacerView>; //<SpacerView variant={variant}> {children} </SpacerView>;
};
