import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { FavoriteContext } from "../../services/favorites/favouries.context";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 10;
`;
export const Favorite = ({ restaurant }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(
    FavoriteContext
  );
  const isFavorite = favorites.find((f) => f.placeId === restaurant.placeId);
  return (
    <>
      <FavouriteButton
        onPress={() =>
          !isFavorite
            ? addToFavorites(restaurant)
            : removeFromFavorites(restaurant)
        }
      >
        <AntDesign
          name={isFavorite ? "heart" : "hearto"}
          size={24}
          color={"red"}
        />
      </FavouriteButton>
    </>
  );
};
