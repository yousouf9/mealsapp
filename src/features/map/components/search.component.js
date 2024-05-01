import React, { useState, useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/locations/location.context";

const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
  position: absolute;
  top: 40px;
  z-index: 999;
  width: 100%;
`;

const RestaurantSearchBar = styled(Searchbar)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [keywordSearch, setkeywordSearch] = useState(keyword);

  useEffect(() => {
    setkeywordSearch(keyword);
  }, [keyword]);
  return (
    <>
      <SearchContainer>
        <RestaurantSearchBar
          placeholder="Search Restaurants"
          elevation={1}
          icon="map"
          value={keywordSearch}
          onSubmitEditing={() => {
            search(keywordSearch);
          }}
          onChangeText={(text) => {
            setkeywordSearch(text);
          }}
        />
      </SearchContainer>
    </>
  );
};
