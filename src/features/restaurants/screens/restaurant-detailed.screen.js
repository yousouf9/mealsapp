import React, { useState } from "react";
import { List } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsInfoCard } from "../components/restaurants-info-card.component";
import { ScrollView } from "react-native";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [dinerExpanded, setDinerExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  return (
    <>
      <SafeArea>
        <RestaurantsInfoCard restaurant={restaurant} />
        <List.Section title="Menu">
          <ScrollView>
            <List.Accordion
              title="Breakfast"
              left={(props) => <List.Icon {...props} icon="bread-slice" />}
              expanded={breakfastExpanded}
              onPress={() => setBreakfastExpanded(!breakfastExpanded)}
            >
              <List.Item title="Scramble eggs with bread" />
              <List.Item title="Egg Sauce bread" />
              <List.Item title="Egg Sauce Yam" />
              <List.Item title="Egg Sauce sweet Potato" />
            </List.Accordion>
            <List.Accordion
              title="Lunch"
              left={(props) => <List.Icon {...props} icon="hamburger" />}
              expanded={lunchExpanded}
              onPress={() => setLunchExpanded(!lunchExpanded)}
            >
              <List.Item title="Punded Yam with Egusi soup" />
              <List.Item title="Indomie" />
              <List.Item title="Rice and Stew and Chicken" />
            </List.Accordion>
            <List.Accordion
              title="Dinner"
              left={(props) => <List.Icon {...props} icon="food" />}
              expanded={dinerExpanded}
              onPress={() => setDinerExpanded(!dinerExpanded)}
            >
              <List.Item title="Jollof Rice with Fish" />
              <List.Item title="Jollof Rice with Chicken" />
              <List.Item title="Fried Rice with Beef" />
            </List.Accordion>
            <List.Accordion
              title="Drinks"
              left={(props) => <List.Icon {...props} icon="food" />}
              expanded={drinksExpanded}
              onPress={() => setDrinksExpanded(!drinksExpanded)}
            >
              <List.Item title="Bottle Water" />
              <List.Item title="Sodas" />
              <List.Item title="Yorghurts" />
              <List.Item title="More" />
            </List.Accordion>
          </ScrollView>
        </List.Section>
      </SafeArea>
    </>
  );
};
