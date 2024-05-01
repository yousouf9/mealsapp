import React from "react";
import { SvgXml as Star } from "react-native-svg";
import { SvgXml as Open } from "react-native-svg";
import star from "@assets/star";
import open from "@assets/open";
import { Text } from "../../../components/typography/text.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  RatingSection,
  RestaurantStatusImage,
  RestaurantStatusSection,
  TemporaryClosed,
} from "./restaurant-info-card.styles";
import { Favorite } from "../../../components/favourites/favourites.component";
export const RestaurantsInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  const renderStar = ratingArray.map((rate, i) => (
    <Star xml={star} width={20} height={20} key={i} />
  ));

  return (
    <>
      <RestaurantCard elevation={5}>
        <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
        <Favorite restaurant={restaurant} />
        <Info>
          <Text variant={"label"}>{name}</Text>
          <Section>
            <RatingSection>{renderStar}</RatingSection>
            <RestaurantStatusSection>
              {isClosedTemporarily && (
                <TemporaryClosed variant="caption">
                  {"CLOSED TEMPORARILY"}
                </TemporaryClosed>
              )}
              {isOpenNow && <Open xml={open} width={20} height={20} />}
              <RestaurantStatusImage source={{ uri: icon }} />
            </RestaurantStatusSection>
          </Section>
          <Text variant={"caption"}>{address}</Text>
        </Info>
      </RestaurantCard>
    </>
  );
};
