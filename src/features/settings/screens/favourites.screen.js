import React, { useContext } from "react";
import styled from "styled-components/native";
import { FavoriteContext } from "../../../services/favorites/favouries.context";
import { RestaurantListContainer } from "../../restaurants/components/restaurant-list.styles";
import { Text } from "../../../components/typography/text.component";
import { TouchableOpacity } from "react-native";
import { RestaurantsInfoCard } from "../../restaurants/components/restaurants-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

const NoFavourites = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
export const FavouritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoriteContext);
  return favorites.length ? (
    <SafeArea>
      <RestaurantListContainer
        data={favorites}
        renderItem={({ item }) => {
          return (
            <>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("RestaurantsDetail", {
                    restaurant: item,
                  });
                }}
              >
                <Spacer position={"bottom"} size={"large"}>
                  <RestaurantsInfoCard restaurant={item} />
                </Spacer>
              </TouchableOpacity>
            </>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavourites>
      <Text variant="caption">No Favourites Yet</Text>
    </NoFavourites>
  );
};
