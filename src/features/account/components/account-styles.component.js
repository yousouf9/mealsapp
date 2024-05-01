import { ImageBackground } from "react-native";
import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text.component";
import LottieView from "lottie-react-native";

export const BackgroundImageCover = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const BackgroundAuthContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${({ theme }) => theme.space[4]};
  margin-top: ${({ theme }) => theme.space[2]};
`;

export const BackgroundImageWrapper = styled(ImageBackground).attrs({
  source: require("../../../../assets/6.jpg"),
})`
  flex: 1;
  background-color: #ddd;
  align-items: center;
  justify-content: center;
`;

export const AuthButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
  padding: ${({ theme }) => theme.space[2]};
  border-radius: 5px;
`;
export const AuthInput = styled(TextInput)`
  min-width: 300px;
`;

export const Title = styled(Text)`
  font-size: 30px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${({ theme }) => theme.space[2]};
  margin-bottom: ${({ theme }) => theme.space[2]};
`;
export const LottieAnimation = styled(LottieView).attrs({
  key: "animation",
  resizeMode: "cover",
  autoPlay: true,
  loop: true,
  source: require("../../../../assets/watermelon.json"),
})`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${({ theme }) => theme.space[2]};
`;
