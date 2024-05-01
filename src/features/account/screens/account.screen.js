import React from "react";
import {
  AuthButton,
  BackgroundAuthContainer,
  BackgroundImageCover,
  BackgroundImageWrapper,
  Title,
  LottieAnimation,
} from "../components/account-styles.component";
import { Spacer } from "../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
  return (
    <>
      <BackgroundImageWrapper>
        <BackgroundImageCover />
        <LottieAnimation />
        <Title> Meals </Title>
        <BackgroundAuthContainer>
          <AuthButton
            icon="account-lock-open"
            mode="contained"
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </AuthButton>
          <Spacer position="top" size="large">
            <AuthButton
              icon="account-lock-open-outline"
              mode="contained"
              onPress={() => navigation.navigate("Register")}
            >
              Register
            </AuthButton>
          </Spacer>
        </BackgroundAuthContainer>
      </BackgroundImageWrapper>
    </>
  );
};
