import React, { useEffect, useContext, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import styled from "styled-components/native";
import { Search } from "../components/search.component";
import { LocationContext } from "../../../services/locations/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurant.context";
import { MapCallout } from "../components/callout.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantsContext);
  const { lng, lat, viewport } = location;
  const { northeast, southwest } = viewport;
  const [latDelta, setLatDelta] = useState(0);

  console.log("here", viewport);
  useEffect(() => {
    const northeastLat = northeast.lat;
    const southWestLat = southwest.lat;
    const latDeltaValue = northeastLat - southWestLat;
    setLatDelta(latDeltaValue);
  }, [location, northeast, southwest]);
  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants &&
          restaurants.map((restaurant) => {
            const latMarker = restaurant.geometry.location.lat;
            const lngMarker = restaurant.geometry.location.lng;

            return (
              <Marker
                key={restaurant.name}
                title={restaurant.name}
                coordinate={{ latitude: latMarker, longitude: lngMarker }}
              >
                <Callout
                  onPress={() =>
                    navigation.navigate("RestaurantsDetail", { restaurant })
                  }
                >
                  <MapCallout restaurant={restaurant} />
                </Callout>
              </Marker>
            );
          })}
      </Map>
    </>
  );
};
