import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";

export const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
  border-radius: ${({ theme }) => theme.space[0]};
`;
export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
  border-radius: ${({ theme }) => theme.space[1]};
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.ui.primary};
`;
export const Address = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.caption};
`;
export const TemporaryClosed = styled(Text)`
  color: ${({ theme }) => theme.colors.text.error};
`;
export const Info = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;
export const Section = styled.View`
  flex-direction: row;
  padding-vertical: ${({ theme }) => theme.space[1]};
  justify-content: space-between;
`;
export const RatingSection = styled.View`
  flex-direction: row;
`;
export const RestaurantStatusSection = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.space[2]};
`;

export const RestaurantStatusImage = styled.Image`
  height: 15px;
  width: 15px;
`;
