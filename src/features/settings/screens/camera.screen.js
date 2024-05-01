import React, { useEffect, useRef, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Camera, CameraType } from "expo-camera";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/text.component";
import { TouchableOpacity, View } from "react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const CameraWraper = styled.View`
  flex: 1;
  position: relative;
`;
const CameraView = styled(Camera)`
  flex: 1;
`;
const TakePicture = styled(TouchableOpacity)`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  align-items: center;
  justify-content: center;
`;
export const CameraScreen = ({ navigation }) => {
  const cameraRef = useRef();
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const { user } = useContext(AuthenticationContext);
  useEffect(() => {
    if (permission?.granted) {
      return;
    }
    requestPermission();
  }, [permission, requestPermission]);

  if (permission === null) {
    return <View />;
  }
  if (permission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleTakePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      await AsyncStorage.setItem(`${user.uid}-phote`, photo.uri);
      navigation.goBack();
    }
  };
  return (
    <>
      <CameraWraper>
        <CameraView
          ref={(camRef) => {
            const camera = (cameraRef.current = camRef);
            return camera;
          }}
          type={CameraType.front}
          ratio={"16:9"}
        />
        <TakePicture onPress={handleTakePicture}>
          <Text>Take</Text>
        </TakePicture>
      </CameraWraper>
    </>
  );
};
