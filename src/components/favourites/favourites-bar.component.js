import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { CompactRestaurantInfo } from "../restaurants/compact-info-restaurant.component";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouriteBar = ({ favorites, onNavigate }) => {
  if (!favorites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer position={"bottom"} size={"large"}>
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites &&
          favorites.map((restaurant) => {
            const key = restaurant.name.split(" ").join("");
            return (
              <Spacer position={"right"} size={"medium"} key={key}>
                <TouchableOpacity
                  onPress={() =>
                    onNavigate("RestaurantsDetail", {
                      restaurant,
                    })
                  }
                >
                  <CompactRestaurantInfo
                    restaurant={restaurant}
                    isMap={false}
                  />
                </TouchableOpacity>
              </Spacer>
            );
          })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
