import React, { useState, useContext } from "react";
import {
  AuthButton,
  BackgroundImageWrapper,
  BackgroundImageCover,
  BackgroundAuthContainer,
  Title,
  AuthInput,
  ErrorContainer,
} from "../components/account-styles.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/text.component";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSecured, setIsSecured] = useState(true);
  const { onLogin, isLoading, error } = useContext(AuthenticationContext);

  return (
    <>
      <BackgroundImageWrapper>
        <BackgroundImageCover />
        <Title> Meals </Title>
        <BackgroundAuthContainer>
          <AuthInput
            label={"email"}
            value={email}
            textContentType={"emailAddress"}
            keyboardType={"email-address"}
            autoCapitalize={"none"}
            rightIcon={true}
            onChangeText={setEmail}
            right={<AuthInput.Icon name="email" />}
          />
          <Spacer position="top" size="large" />
          <AuthInput
            value={password}
            label={"password"}
            textContentType={"password"}
            autoCapitalize={"none"}
            secureTextEntry={isSecured}
            onChangeText={setPassword}
            right={
              <AuthInput.Icon
                name="eye"
                onPress={() => setIsSecured(!isSecured)}
              />
            }
          />
          <Spacer position="top" size="large" />
          {error && (
            <ErrorContainer>
              <Text variant="error"> {error.code} </Text>
            </ErrorContainer>
          )}
          <Spacer position="bottom" size="large" />
          <AuthButton
            icon="account-lock-open"
            mode="contained"
            loading={isLoading}
            disabled={isLoading}
            onPress={() => {
              onLogin(email, password);
            }}
          >
            Login
          </AuthButton>
        </BackgroundAuthContainer>
        <Spacer position="top" size="large">
          <AuthButton mode="contained" onPress={() => navigation.goBack()}>
            Back
          </AuthButton>
        </Spacer>
      </BackgroundImageWrapper>
    </>
  );
};
