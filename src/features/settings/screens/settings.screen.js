import React, { useContext, useCallback, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { List, Avatar } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import styled from "styled-components/native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

const SettingsItem = styled(List.Item)`
  padding: ${({ theme }) => theme.space[3]};
`;
const SettingWrapper = styled.View`
  padding: ${({ theme }) => theme.space[2]};
  align-items: center;
  justify-content: center;
`;

const SettingsAvatarIcon = styled(Avatar.Icon)`
  background-color: #2182bd;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const loadProfilePhoto = async (current) => {
    const photoUri = await AsyncStorage.getItem(`${current.uid}-phote`);
    setPhoto(photoUri);
  };

  useFocusEffect(
    useCallback(() => {
      loadProfilePhoto(user);
      return () => null;
    }, [user])
  );

  return (
    <SafeArea>
      <SettingWrapper>
        <TouchableOpacity onPress={() => navigation.navigate("camera")}>
          {!photo ? (
            <SettingsAvatarIcon size={180} icon="human" />
          ) : (
            <Avatar.Image
              size={180}
              source={{
                uri: photo,
              }}
            />
          )}
        </TouchableOpacity>
        <Spacer postion="top" size="large" />
        <Text variant="body">{user.email || "ysuuf"}</Text>
      </SettingWrapper>

      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your Favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
