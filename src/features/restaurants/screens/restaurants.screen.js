import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import { useTheme } from "styled-components/native";
import { RestaurantsInfoCard } from "../components/restaurants-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";
import { FavoriteContext } from "../../../services/favorites/favouries.context";
import { Loading } from "../../../components/utility/loading-indicator.component";
import { Search } from "../components/search.component";
import { FavouriteBar } from "../../../components/favourites/favourites-bar.component";
import { RestaurantListContainer } from "../components/restaurant-list.styles";
import { FadeInView } from "../../../components/animations/fade.animation";

export const RestaurantsScreen = ({ navigation }) => {
  const theme = useTheme();
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favorites } = useContext(FavoriteContext);
  const [showFavourite, setShowFavourite] = useState(false);
  return (
    <SafeArea>
      <Search
        showFavourite={showFavourite}
        onShowFavorite={() => setShowFavourite(!showFavourite)}
      />
      {isLoading && <Loading size={50} color={theme.colors.ui.primary} />}
      {showFavourite && (
        <FavouriteBar favorites={favorites} onNavigate={navigation.navigate} />
      )}
      <RestaurantListContainer
        data={restaurants}
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
                  <FadeInView>
                    <RestaurantsInfoCard restaurant={item} />
                  </FadeInView>
                </Spacer>
              </TouchableOpacity>
            </>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
