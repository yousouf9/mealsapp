import React from "react";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components/native";

const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Loading = ({ size, color }) => {
  return (
    <LoadingContainer>
      <ActivityIndicator animating={true} size={size} color={color} />
    </LoadingContainer>
  );
};
