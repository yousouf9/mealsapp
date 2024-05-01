import React from "react";
import { Platform } from "react-native";
import { WebView } from "react-native-webview";
import styled from "styled-components/native";
import { Text } from "../typography/text.component";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;
const Item = styled.View`
  padding: 10px;
  max-width: 124px;
  align-items: center;
`;
const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap = true }) => {
  const { photos, name } = restaurant;
  const Image = isMap && isAndroid ? CompactWebView : CompactImage;
  return (
    <Item>
      <Image source={{ uri: photos[0] }} />
      <Text variant={"caption"}>{name}</Text>
    </Item>
  );
};
